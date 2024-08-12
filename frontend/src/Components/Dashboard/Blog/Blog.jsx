import React from 'react';
import { Link } from 'react-router-dom';
import SearchElement from '../../utils/SearchElement';
import BlogImage from '../../../assets/blog1.jpg';
import './blog.css'; 

const blog = () => {
    
    return (
        <div className="edit-blog-container">
            <h3 className="edit-blog-title">Edit Blog</h3>

            <div className="search-add-container">
                <Link to="/blog/add">
                    <button className="add-blog-button">
                        <i className="bx bx-briefcase-alt"></i>
                        Add Blog
                    </button>
                </Link>
                <SearchElement />
            </div>

            <h2 className="blog-count">Total of Blog: <span>No. of Blog</span></h2>

            <div className="blog-grid">
                <h4 className="no-blog-message">You have not set any blogs.</h4>

                    <h4 className="no-blog-message">Blog not found.</h4>

                
                    <div className="blog-item">
                        <div>
                            <img src={BlogImage} alt="blog" className="blog-image" />
                            <h3 className="blog-title">Blog Title</h3>

                                <div className="blog-tag">
                                    <p>tag</p>
                                </div>

                        </div>
                        <div className="blog-actions">
                            <a href="blog" target="_blank" rel="noreferrer">
                                <button className="link-blog-button">
                                    <i className="bx bx-link-alt"></i>
                                </button>
                            </a>
                            <Link to='update'>
                                <button className="edit-blog-button">Edit</button>
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default blog;
