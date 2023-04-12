import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import StylePosts from "./StylePosts.css"
const Posts = () => {

    let [posts, setPosts] = useState([])
    let [postInfo, setPostInfo] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [])

    const infoFunc = (post) => {
        setPostInfo(post)
    }

    return (
        <div>
            <div>
                {postInfo && <div className={'parent'} ><h2 className={'red'} >{postInfo.body}</h2></div>}
                {posts.map(post => <Post key={post.id} post={post} infoFunc={infoFunc}/>)}
            </div>

        </div>
    );
};

export default Posts;