# Career Guidance Backend

## Setup Instructions

1. Clone repo -
git clone https://github.com/Fathimaswabrii/career-guidance-backend.git

2. Create virtual environment -
python -m venv venv 
venv\Scripts\activate   # Windows

3. Install dependencies -
pip install -r requirements.txt

4. Run migrations -
python manage.py migrate

5. Load initial data -
python manage.py loaddata data.json

6. Run server -
python manage.py runserver