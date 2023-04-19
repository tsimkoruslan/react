import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import userServices from "../../services/user.services";

const PostByComment = () => {
    const {id} = useParams()

    // const {state} =  useLocation()
    // const postId = state.id

    const [post, setPost] =  useState([])

    useEffect(()=>{
        userServices
            .getPostById(id)
            .then(value => value.data)
            .then(value => setPost(value))
    },[id])

    return (
        <div>
            {post.title} - {post.id}
        </div>
    );
};

export default PostByComment;