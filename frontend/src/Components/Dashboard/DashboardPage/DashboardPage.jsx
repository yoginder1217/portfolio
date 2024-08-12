import React from "react";
import "./dashboardpage.css";

const DashboardPage = () => {
  return (
    <div className="dashboard-home">
      <h3 className="dashboard-home-title">Dashboard</h3>
      <h2 className="dashboard-home-welcome">
        Welcome, <span className="dashboard-home-username">Yoginder Singh</span>
      </h2>
      <div className="dashboard-home-button">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <button className="button-red">See My Homepage</button>
        </a>
      </div>
      <div className="dashboard-home-content">
        <div className="dashboard-home-grid">
          <div className="dashboard-home-card">
            <div className="card">
              <div className="card-header">
                <div className="header-content">
                  <img className="avatar" src="" alt="user_image" />
                  <div className="header-info">
                    <div className="header-info-top">
                      <h5 className="username">
                        Yoginder Singh
                        <a href="/profile">
                          <i className="bx bx-link-external"></i>
                        </a>
                      </h5>
                      <div className="social-icons">
                        <a
                          href="https://github.com/yoginder1217"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bx bxl-github"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/yoginder1217/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bx bxl-linkedin"></i>
                        </a>
                        <a
                          href="https://www.instagram.com/yoginder1217/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bx bxl-instagram"></i>
                        </a>
                        <a
                          href="https://codepen.io/yogi_Sparky"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bx bxl-codepen"></i>
                        </a>
                      </div>
                    </div>
                    <p className="title">Title</p>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p className="description">Description</p>
              </div>
            </div>
          </div>

          <div className="dashboard-home-stats-card">
            <div className="stats-card-content">
              <i className="bx bx-briefcase-alt-2"></i>
              <h3>My Portfolios</h3>
              <h1>portfolio</h1>
            </div>
          </div>

          <div className="dashboard-home-stats-card">
            <div className="stats-card-content">
              <i className="bx bx-book"></i>
              <h3>My Skills</h3>
              <h1>skill</h1>
            </div>
          </div>
        </div>

        <div className="dashboard-home-lower-grid">
          <div className="dashboard-home-lower-card">
            <div className="lower-card-header">
              <a href="/skill">
                <i className="bx bx-link-alt"></i> Skill Level
              </a>
            </div>
          </div>

          <div className="dashboard-home-lower-card">
            <div className="lower-card-header">
              <a href="/portfolio">
                <i className="bx bx-link-alt"></i> Recent Work
              </a>
            </div>
            <div className="portfolio">
              <img src="*" alt="portfolio" className="portfolio-image" />
              <h3 className="portfolio-title">Project title</h3>
              <div className="portfolio-tag">
                <p>tag</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
