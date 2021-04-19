import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Admin from '../Admin/Admin/Admin';
import User from '../Users/User/User';

const AppControl = () => {
    const [admins, setAdmins] = useState([])
    const [isAdmins, setIsAdmin] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        const url = 'https://peaceful-wildwood-58192.herokuapp.com/allAdmins'
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setAdmins(data);
            
        })
    },[])

console.log(loggedInUser.email);
    const adminEmail = admins.find(admin => loggedInUser.email);
    
    return (
        <div>
            {
                admins.find(admin => admin.admin === loggedInUser.email)
                ? 
                <Admin></Admin>
                : 
                <User></User>
            }
            
        </div>
    );
};

export default AppControl;