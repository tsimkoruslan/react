import React, {FC} from 'react';
import {IUser} from "../interfaces/user.interface";

interface IProps {
    user:IUser

}

const UserDetails : FC<IProps> = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <div>{id} {name}</div>
            <div>{username}</div>
            <div>{email}</div>
        </div>
    );
};

export default UserDetails;