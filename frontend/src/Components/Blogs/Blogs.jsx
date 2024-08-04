import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import BlogItems from './BlogItems';
import Pagination from './Pagination';

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4); // Constant, so it doesn't change
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    // Calculate current projects based on the current page and posts per page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    setProjects(projectsData.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, postsPerPage]); // Include postsPerPage in the dependency array

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(projectsData.length / postsPerPage)) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div className="blogs-pagination-container">
      <div className="blog__container container grid">
        {projects.map((item) => {
          return <BlogItems item={item} key={item.id} />;
        })}
      </div>

      {/* Place Pagination component within Blogs section */}
      <div className="pagination-container">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={projectsData.length}
          paginate={paginate}
          currentPage={currentPage}
          nextPage={nextPage}
        />
      </div>
    </div>
  );
};

export default Blogs;
