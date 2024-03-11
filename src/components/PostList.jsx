import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                Список постов
            </h1>
            {posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} post={post}/>
            )}
        </div>
    );
};

export default PostList;