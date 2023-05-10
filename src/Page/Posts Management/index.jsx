/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Post-Management.css";

function PostManagement() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
      setFilteredPosts(response.data);
    });
  }, []);

  const handleViewPost = (post) => {
    setSelectedPost(post);
  };

  const handleClosePost = () => {
    setSelectedPost(null);
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterText(value);
    if (value === "") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter(
          (post) =>
            post.title.includes(value) || post.userId.toString() === value
        )
      );
    }
    setCurrentPage(1);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='wrapper-posts'>
      <div className='title-posts'>User Management</div>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='icon-filter'
          viewBox='0 0 16 16'
        >
          <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
        </svg>
        <input
          className='filter'
          type='text'
          placeholder='Filter by User ID or Title'
          value={filterText}
          onChange={handleFilterChange}
        />
      </div>
      <div className='demo-btn-management1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='icon-demo-btn-management'
          viewBox='0 0 16 16'
        >
          <path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z' />
        </svg>
        <span className='title-demo-btn-management'>Date range</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='dropdown-demo-btn-management'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
          />
        </svg>
      </div>
      <div className='demo-btn-management2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='icon-demo-btn-management'
          viewBox='0 0 16 16'
        >
          <path d='M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z' />
          <path d='M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z' />
        </svg>
        <span className='title-demo-btn-management'>Status</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='dropdown-demo-btn-management'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
          />
        </svg>
      </div>
      <div className='demo-btn-management3'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='icon-demo-btn-management'
          viewBox='0 0 16 16'
        >
          <path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z' />
          <path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
        </svg>
        <span className='title-demo-btn-management'>Department</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='dropdown-demo-btn-management'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
          />
        </svg>
      </div>
      <div className='demo-btn-management4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='icon-demo-btn-management'
          viewBox='0 0 16 16'
        >
          <path d='M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z' />
        </svg>
        <span className='title-demo-btn-management'>Saved filters (0)</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='dropdown-demo-btn-management'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
          />
        </svg>
      </div>
      <table className='table-posts'>
        <thead>
          <tr>
            <th className='lable-id' style={{ paddingLeft: "20px" }}>
              Id
            </th>
            <th className='lable-user'>User ID</th>
            <th className='lable-title'>Title</th>
            <th className='lable-action'>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post) => (
            <tr key={post.id}>
              <td style={{ paddingLeft: "20px" }}>{post.id}</td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>
                <button
                  className='btn-view'
                  onClick={() => handleViewPost(post)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                    width={15}
                    height={15}
                  >
                    <path d='M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z' />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => setCurrentPage(number)}
              className={number === currentPage ? "active" : ""}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
      {selectedPost && (
        <div className='post-details'>
          <h3 className='lable-details'>Post Details</h3>
          <p className='userid-details'>User ID: {selectedPost.userId}</p>
          <p className='title-details'>Title: {selectedPost.title}</p>
          <p className='body-details'>Body: {selectedPost.body}</p>
          <button className='close-details' onClick={handleClosePost}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default PostManagement;
