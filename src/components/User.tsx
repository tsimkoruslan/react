import React, {FC} from 'react';
import {IUser} from "../interfaces/user.interface";
import {useNavigate} from "react-router-dom";

interface IProps {
    user:IUser;
}
const User : FC<IProps>= ({user}) => {

    const navigate = useNavigate();

    const {id, name, username, email} = user

    return (
        <div>
            <div>{id} {name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <button onClick={()=>navigate(`${id}`, {state:{...user}})} >UserDetails</button>
        </div>
    );
};

export default User;