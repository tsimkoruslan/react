import React, {useEffect, useState} from 'react';
import User from "../User/User";
import UserForm from "../UserForm/UserForm";
import {usersService} from "../../services/usersService";

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getAll().then(value => value.data).then(value => setUsers(value))
    },[])

    return (
        <div>
            <div>
                <UserForm/>
            </div>
            <div>
                {
                    users.map(item => <User item={item} key={item.id}/>)
                }
            </div>
        </div>
    );
};

export default Users;