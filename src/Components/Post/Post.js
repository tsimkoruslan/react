import React  from 'react';

const Post = ({post, infoFunc}) => {
    const {id, title} = post
    return (
        <div>
            <h1> {id} {title} </h1>
            <button onClick={()=>infoFunc(post)}>more info</button>
        </div>
    );
};

export default Post;