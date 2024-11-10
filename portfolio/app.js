import React from 'react';
import './Portfolio.css'; 

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>Kanishik Sai Koshik</h1>
        <p>Contact: +918218836412 | Email: kanishkkaushik78@gmail.com</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/kanishk-sai-kaushik-6a6945272/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/kanishik0011" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>Welcome to my portfolio! I am a B.Tech student specializing in Computer Science and Business Systems.</p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li><a href="file:///C:/Users/kanis/animatedfile/index.html" target="_blank" rel="noopener noreferrer">Animated Website</a></li>
          <li>Tele AI-based Healthcare</li>
          <li>Smart AI-based Traffic System</li>
        </ul>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        <p>Languages: C++, Python, Java</p>
        <p>IT Constructs: Data Structures & Algorithms, OS, DBMS, OOPS</p>
        <p>Frameworks: React, Express.js, Node.js</p>
        <p>Databases: SQL</p>
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        <p>Global Rank 2266 in TCS CodeVita Season 11.</p>
        <p>Solved 250+ LeetCode problems, maintained 179-day streak.</p>
        <p>Selected for Prescreening Round, Smart India Hackathon.</p>
      </section>

      <footer className="footer">
        <p>© 2023 Kanishik Sai Koshik. All rights reserved.</p>
      </footer>

      {/* Chatbot component can be added here */}
    
    </div>
  );
};

export default Portfolio;