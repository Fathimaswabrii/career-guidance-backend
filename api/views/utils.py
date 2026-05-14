"""
Utility functions shared across views
"""
import re
from django.db.models import Q
from ..models import Career


def clean_and_match_career(ml_prediction):
    """
    Clean ML prediction and match with existing Career model entries.
    Returns matched career name or original prediction as fallback.
    """
    # Clean the ML prediction (remove extra text like "(2020...)")
    cleaned_prediction = re.sub(r'\s*\([^)]*\)', '', ml_prediction).strip()
    
    # Try exact match first
    exact_match = Career.objects.filter(name__iexact=cleaned_prediction).first()
    if exact_match:
        return exact_match.name
    
    # Try partial/contains match
    partial_match = Career.objects.filter(name__icontains=cleaned_prediction).first()
    if partial_match:
        return partial_match.name
    
    # Try matching individual words (for multi-word careers)
    words = cleaned_prediction.split()
    if len(words) >= 2:
        # Try first two words
        first_words_match = Career.objects.filter(
            name__icontains=f"{words[0]} {words[1]}"
        ).first()
        if first_words_match:
            return first_words_match.name
        
        # Try first word
        first_word_match = Career.objects.filter(name__icontains=words[0]).first()
        if first_word_match:
            return first_word_match.name
    
    # Return original ML prediction as fallback
    return ml_prediction


def create_hybrid_features(aptitude_scores, user_profile):
    """
    Weighted Hybrid Approach: Combine aptitude scores (70%) + profile interests (30%)
    """
    import json
    
    # Initialize base features (aptitude)
    features = [
        aptitude_scores['linguistic'],
        aptitude_scores['musical'],
        aptitude_scores['bodily'],
        aptitude_scores['logical'],
        aptitude_scores['spatial'],
        aptitude_scores['interpersonal'],
        aptitude_scores['intrapersonal'],
        aptitude_scores['naturalist']
    ]
    
    # Interest-based feature enhancement
    interest_boost = {
        'linguistic': 0,
        'musical': 0,
        'bodily': 0,
        'logical': 0,
        'spatial': 0,
        'interpersonal': 0,
        'intrapersonal': 0,
        'naturalist': 0
    }
    
    if user_profile and user_profile.interests:
        try:
            interests = json.loads(user_profile.interests)
            # Map interests to aptitude categories
            interest_mapping = {
                'technology': ['logical', 'spatial'],
                'programming': ['logical', 'spatial'],
                'music': ['musical'],
                'sports': ['bodily'],
                'art': ['spatial'],
                'writing': ['linguistic'],
                'teaching': ['interpersonal', 'linguistic'],
                'healthcare': ['bodily', 'interpersonal'],
                'business': ['interpersonal', 'logical'],
                'science': ['logical', 'spatial'],
                'nature': ['naturalist'],
                'psychology': ['intrapersonal', 'interpersonal'],
                'communication': ['linguistic', 'interpersonal']
            }
            
            # Apply interest boosts
            for interest in interests:
                if interest.lower() in interest_mapping:
                    for category in interest_mapping[interest.lower()]:
                        interest_boost[category] += 5  # Add 5 points per matching interest
        except:
            pass  # Handle JSON parsing errors
    
    # Apply weighted hybrid: 70% aptitude + 30% interests
    hybrid_features = []
    for i, category in enumerate(['linguistic', 'musical', 'bodily', 'logical', 'spatial', 'interpersonal', 'intrapersonal', 'naturalist']):
        base_score = features[i]
        interest_score = interest_boost[category]
        # Weighted combination: 70% aptitude + 30% interests
        # hybrid_score = (base_score * 0.7) + (interest_score * 0.3)

        hybrid_score = base_score + (interest_score * 0.2)

        
        hybrid_features.append(hybrid_score)
    
    return [hybrid_features]
