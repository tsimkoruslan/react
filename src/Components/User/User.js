import React from 'react';

const User = ({item}) => {
    const {id, name, username, email} = item
    return (
        <div>
            <h1>{id} {name}</h1>
            <h2> {username} {email} </h2>
        </div>
    );
};

export default User;