import React, {useEffect, useState} from 'react';
import userServices from "../../services/user.services";
import Comment from "../Comment/Comment";
import {Outlet} from "react-router-dom";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        userServices
            .getComments()
            .then(value => value.data)
            .then(value => setComments(value))
    }, [])

    return (

        <div>
            <Outlet/>
            <div>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export default Comments;