import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/admin/login",
        { email, password },
        { withCredentials: true } 
      );
      const token = response.data.data.token;
      // console.log("Response:", response.data);
      localStorage.setItem("adminToken", token);
      alert("Logged in successfully!");
      navigate("/admin"); 
    } catch (error) {
      console.error("Error logging in:", error);
      if (error.response) {
        console.error("Response error:", error.response.data);
        alert(error.response.data.message || "Login failed. Please try again.");
      } else {
        alert("Login failed. Please try again.");
      }
    } finally {
      setEmail("");
      setPassword("");
    }
  };
  return (
    <StyledWrapper>
      <div className="login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <button type="submit">
            <span />
            <span />
            <span />
            <span />
            Submit
          </button>
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a;

  .login-box {
    position: relative;
    padding: 40px;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 10px;
    width: 400px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  }

  .login-box h2 {
    text-align: center;
    color: #fff;
    margin-bottom: 30px;
  }

  .user-box {
    position: relative;
    margin-bottom: 30px;
  }

  .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }

  .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }

  .user-box input:focus ~ label,
  .user-box input:valid ~ label {
    top: -20px;
    font-size: 12px;
  }

  form button {
    position: relative;
    padding: 10px 20px;
    font-weight: bold;
    color: #fff;
    font-size: 16px;
    background: none;
    border: 1px solid #fff;
    text-transform: uppercase;
    margin-top: 40px;
    cursor: pointer;
    transition: 0.5s;
  }

  form button:hover {
    background: #fff;
    color: #272727;
    border-radius: 5px;
  }
`;

export default AdminLogin;
