import React from "react";

const Pagination = ({
    numberOfPosts,
    currentPage,
    setCurrentPage,
    postsPerPage
}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(numberOfPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className="pagination">
            {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                    <button
                        className={`page-link ${
                            currentPage === number ? "active-page" : ""
                        }`}
                        onClick={() => {
                            setCurrentPage(number);
                        }}
                    >
                        {number}
                    </button>
                </li>
            ))}
        </nav>
    );
};

export default Pagination;
