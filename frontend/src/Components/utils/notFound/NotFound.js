import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.css'; // Import the custom CSS

const NotFound = () => {
    return (
        <section className="not-found-container">
            <div className="not-found-content">
                <div className="not-found-text-center">
                    <h2 className="not-found-title">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="not-found-message">
                        Sorry, we couldn't find this page.
                    </p>
                    <Link to="/" className="not-found-link">Back</Link>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
