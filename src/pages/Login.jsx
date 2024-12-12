import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  padding: 50px;
  padding-right: 50px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  flex-direction: column;
  width: 200px;
  background-image: linear-gradient(red, yellow, blue);
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  &::placeholder {
    color: #999;
  }
  &:focus {
    border-color: #5f27cd;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;

const SubmitButton = styled.button`
  background-color: #5f27cd; /* Adjust background color as desired */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  margin-top: 10px; /* Add some margin for spacing */

  &:hover {
    background-color: #4e22b4; /* Slightly darker shade on hover */
  }
`;

function Login() {
  const [user, setUser] = useState({}); // Can be used for storing logged in user data (optional)
  const [loginData, setLoginData] = useState({
    Email: "",
    Password: "",
  });
  const [errors, setErrors] = useState({});
  const apiurl = "https://server-7tfl.onrender.com/users"; 

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (validateForm(loginData)) {
      try {
        const response = await axios.get(apiurl, loginData);
        // Handle successful login (e.g., set user data in state, redirect to dashboard)
        if(response.data.Email=== loginData.Email && response.data.Password === loginData.Password)
        {
        console.log("Login successful!", response.data);
                
        }
        // ... (redirect or store user data)
      } catch (error) {
        console.error("Error logging in:", error);
        // Handle login errors (e.g., display error message)
        setErrors({ login: "Invalid email or password" });
      }
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.Email.trim()) {
      errors.Email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.Email)) {
      errors.Email = "Invalid email format";
    }

    if (!data.Password) {
      errors.Password = "Password is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  return (
    <div>
      <FormContainer>
        <form onSubmit={handleLogin}>
          {errors.login && <ErrorMessage>{errors.login}</ErrorMessage>}
          <InputField
            type="email"
            placeholder="Email"
            value={loginData.Email}
            onChange={(e) => setLoginData({ ...loginData, Email: e.target.value })}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={loginData.Password}
            onChange={(e) =>
              setLoginData({ ...loginData, Password: e.target.value })}
          />
          <SubmitButton type="submit">Login</SubmitButton>
        </form>
      </FormContainer>
    </div>
  );
}

export default Login;