import React, { useEffect, useState } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./styles.css";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            setPosts(res.data);
            setLoading(false);
        };
        fetchPosts();
    }, []);

    const postsPerPage = 10;
    const indexOfLastPost = Math.min(currentPage * postsPerPage, posts.length);
    const indexOfFirstPost = (currentPage - 1) * postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="container">
            <h1>My Blog</h1>
            <Posts loading={loading} posts={currentPosts} />
            <Pagination
                numberOfPosts={posts.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                postsPerPage={postsPerPage}
            />
        </div>
    );
};

export default App;
