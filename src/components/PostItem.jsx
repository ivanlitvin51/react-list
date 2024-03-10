import React from 'react';

const PostItem = (props) => {
    console.log(props);
    return (
            <div className="post">
                <div className="post__content">
                    <strong>1. JavaScript</strong>
                    <div>JavaScript - programming language
                    </div>
                    <div className="post__btns">
                        <button className="del">Удалить</button>
                    </div>
                </div>
            </div>
    );
};

export default PostItem;