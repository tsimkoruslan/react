import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import userServices from "../../services/user.services";

const PostByComment = () => {

    const {state} =  useLocation()
    const postId = state.id
    const [post, setPost] =  useState([])

    useEffect(()=>{
        userServices
            .getPostById(postId)
            .then(value => value.data)
            .then(value => setPost(value))
    },[postId])

    return (
        <div>
            {post.title} - {post.id}
        </div>
    );
};

export default PostByComment;