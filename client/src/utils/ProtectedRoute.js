import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check for token in localStorage
    if (!localStorage.getItem("authToken")) {
      navigate("/login"); // Redirect to login if no token
    }
  }, [navigate]); // Dependency on navigate to ensure it runs only once

  // If the token is missing, nothing will be rendered while we redirect
  return localStorage.getItem("authToken") ? children : null;
};

export default ProtectedRoute;
