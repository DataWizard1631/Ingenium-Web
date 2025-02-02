import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function AdminProtectedWrapper({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false); // State to track if the check is complete

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    console.log("adminToken:", adminToken);
    
    // If there is a token and trying to access the login page, navigate to /admin
    if (adminToken && location.pathname === "/admin-login") {
      setIsChecked(true);  // Mark the check as complete
      navigate("/admin");
    }
    // If there is no token and trying to access the /admin page, navigate to /admin-login
    else if (!adminToken && location.pathname === "/admin") {
      setIsChecked(true);  // Mark the check as complete
      navigate("/admin-login");
    } else {
      setIsChecked(true);  // If neither condition is true, finish the check
    }
  }, [navigate, location.pathname]);  // Ensure effect runs when location changes

  // Render loading state until the token check is complete
  if (!isChecked) {
    return <div>Loading...</div>;
  }

  return <>{children}</>; // Render children if token is present and check is complete
}

export default AdminProtectedWrapper;
