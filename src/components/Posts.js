import React from "react";

const Posts = ({ loading, posts }) => {
    !loading && <h2>Loading...</h2>;
    return (
        <ul className="list-group">
            {posts.map((post) => (
                <li key={post.id} className="list-group-item">
                    {post.title}
                </li>
            ))}
        </ul>
    );
};

export default Posts;
