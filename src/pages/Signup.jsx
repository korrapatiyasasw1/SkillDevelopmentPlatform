import React, { useState } from 'react';
import axios from 'axios'; 
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  padding: 50px;
  padding-right:50px;
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

function Signup() {
    const [user, setUser] = useState([]); 
    const [newUser, setNewUser] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        UserName: "",
        Password: ""
    });
    
    const [errors, setErrors] = useState({});
    const apiurl = "https://server-7tfl.onrender.com/users";

    const addUser = async () => {
        if (validateForm(newUser)) {
            try {
                const response = await axios.post(apiurl, newUser);
                setUser(prevUser => [...prevUser, response.data]); 
                setNewUser({ FirstName: "", LastName: "", Email: "", UserName: "", Password: "" }); 
            } catch (error) {
                console.log("Error adding user", error);
            }
        }
    };

    const validateForm = (data) => {
        let errors = {};
        
        if (!data.Email.trim()) {
            errors.Email = 'Email is required';
        }   
if (!data.FirstName.trim()) {
            errors.FirstName = 'FirstName isrequired';
        }
        
        if(!data.LastName.trim()) {
            errors.LastName = 'LastName is required';
        }
        if(!data.UserName.trim()) {
            errors.UserName = 'UserName is required';
        }
        
        if(!data.Password) 
        {  errors.Password = 'Password is required';
        } else if(data.Password.length < 6) {
            errors.Password = 'Password must be at least 6 characters long';
        } else if(!/[!@#$%^&*]/.test(data.Password))
        {
          errors.Password = "Give One Specail Character"
        }
        setErrors(errors);
        return Object.keys(errors).length === 0; 
    };

    return (
        <div>
            <FormContainer>
                <form id="UserRegistration">
                { 
    <ErrorMessage>{errors.FirstName}</ErrorMessage>}
                    <InputField
                        type="text"
                        placeholder="First Name"
                        value={newUser.FirstName}
                        onChange={(e) => setNewUser({ ...newUser, FirstName: e.target.value })}
                    />
          { <ErrorMessage>{errors.LastName}</ErrorMessage>}

                    <InputField
                        type="text"
                        placeholder="Last Name"
                        value={newUser.LastName}
                        onChange={(e) => setNewUser({ ...newUser, LastName: e.target.value })}
                    />
                {<ErrorMessage>{errors.Email}</ErrorMessage>}
                    <InputField
                        type="email"
                        placeholder="Email"
                        value={newUser.Email}
                        onChange={(e) => setNewUser({ ...newUser, Email: e.target.value })}
                    />
               {  <ErrorMessage>{errors.UserName}</ErrorMessage>}
  
                    <InputField
                        type="text"
                        placeholder="User Name"
                        value={newUser.UserName}
                        onChange={(e) => setNewUser({ ...newUser, UserName: e.target.value })}
                    />
                 {<ErrorMessage>{errors.Password}</ErrorMessage>}
                    <InputField
                        type="password"
                        placeholder="Password"
                        value={newUser.Password}
                        onChange={(e) => setNewUser({ ...newUser, Password: e.target.value })}
                    />
                    <SubmitButton type="button" onClick={addUser}>Submit</SubmitButton>
                </form>
            </FormContainer>
        </div>
    );
}

export default Signup;
