import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/token";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    if (!token) {
      alert("Please login first to access this page");
      navigate("/");
    }
  }, [token, navigate]);

  if (!token) {
    return null; // or a loading spinner
  }

  return children;
}

export default ProtectedRoute;
