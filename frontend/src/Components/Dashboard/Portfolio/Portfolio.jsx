import React from 'react';
import { Link } from 'react-router-dom';
import SearchElement from '../../utils/SearchElement';
import ProjectImage from '../../../assets/work1.jpg';
import './portfolio.css'; 

const Portfolio = () => {
    
    return (
        <div className="edit-portfolio-container">
            <h3 className="edit-portfolio-title">Edit Portfolio</h3>

            <div className="search-add-container">
                <Link to="/portfolio/add">
                    <button className="add-portfolio-button">
                        <i className="bx bx-briefcase-alt"></i>
                        Add Portfolio
                    </button>
                </Link>
                <SearchElement />
            </div>

            <h2 className="portfolio-count">Total of Portfolio: <span>No. of Portfolio</span></h2>

            <div className="portfolio-grid">
                <h4 className="no-portfolio-message">You have not set any portfolios.</h4>

                    <h4 className="no-portfolio-message">Portfolio not found.</h4>

                
                    <div className="portfolio-item">
                        <div>
                            <img src={ProjectImage} alt="portfolio" className="portfolio-image" />
                            <h3 className="portfolio-title">Portfolio Title</h3>

                                <div className="portfolio-tag">
                                    <p>tag</p>
                                </div>

                        </div>
                        <div className="portfolio-actions">
                            <a href="portfolio" target="_blank" rel="noreferrer">
                                <button className="link-portfolio-button">
                                    <i className="bx bx-link-alt"></i>
                                </button>
                            </a>
                            <Link to='update'>
                                <button className="edit-portfolio-button">Edit</button>
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Portfolio;
