import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, name, email} = comment;
    return (
        <div>
            <Link state={{...comment}} to={id.toString()}><h5>{email} - {id}</h5></Link>
            <h5>{name}</h5>

        </div>
    );
};

export default Comment;