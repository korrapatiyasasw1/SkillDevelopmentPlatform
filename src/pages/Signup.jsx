import React, { useState } from 'react';
import axios from 'axios'; 

function Signup() {
    const [user, setUser] = useState([]); 
    const apiurl = "https://server-7tfl.onrender.com/users";
    const [newUser, setNewUser] = useState({
        FirstName: "",
        LastName: "",
        Email:""
    });
    const addUser = async () => {
        try {
            const response = await axios.post(apiurl, newUser);
            setUser(prevUser => [...prevUser, response.data]); 
            setNewUser({ FirstName: "",LastName: "",Email: ""}); 
        } catch (error) {
            console.log("Error adding user", error);
        }
    };

    return (
        <div>
            <form id="UserRegistration">
                <input
                    type="text"
                    placeholder="FirstName"
                    value={newUser.FirstName}
                    onChange={(e) => setNewUser({ ...newUser, FirstName: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="LastName"
                    value={newUser.LastName}
                    onChange={(e) => setNewUser({ ...newUser, LastName: e.target.value })}
                />
                <input 
                   type="text"  placeholder="email" value = {newUser.Email}
                   onChange = {(e) => setNewUser({...newUser,Email:e.target.value })}  
                   />
                
                <button type="button" onClick={addUser}>Submit</button>
            </form>
        </div>
    );
}

export default Signup;
