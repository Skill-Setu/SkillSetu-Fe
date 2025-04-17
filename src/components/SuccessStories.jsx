import React from 'react';
import '../App.css';

const SuccessStories = () => {
  return (
    <section className="success-stories-section">
      <div className="success-stories-container">
        <h1 className="success-stories-heading">Success Stories</h1>
        <div className="success-stories-grid">
          <div className="story-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9W15Hh_7mgF-oO3Dl_M32EWBjJUo_cA8Uw&s"
              alt="Raiesh Kumar"
              className="story-image"
            />
            <p className="story-testimonial">
              "Before SkillSetu, I only relied on seasonal wheat farming. But through the platform, I learned basic carpentry in my free time. Today, I earn an extra £7,000 per month by working part-time for a local furniture unit. Thanks to the video guides by students and AI roadmap, my skills found a new direction."
            </p>
            <h3 className="story-name">Raiesh Kumar</h3>
            <p className="story-role">Farmer, Uttar Pradesh</p>
          </div>
          <div className="story-card">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D35AQET7avNkZkbnw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1711550183722?e=1745485200&v=beta&t=U4X5kiJHoCKY3d2FZvo-JlxyfsCpWHhL987_ujT6aZQ"
              alt="Manya Kukreja"
              className="story-image"
            />
            <p className="story-testimonial">
              "As a 3rd year computer science student, I wanted to give back to society. Through SkillSetu, I created a short video series in Hindi explaining computer basics for farmers. I got a certificate, internship credits, and more importantly, villagers still call me 'Digital Didi'. It's been life-changing!"
            </p>
            <h3 className="story-name">Manya Kukreja</h3>
            <p className="story-role">Engineering Student, Delhi</p>
          </div>

          <div className="story-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcsvcM9PrEvd3Y4DSMb_-t4bTkvMN770DDpw&s"
              alt="Sarpanch Lakshmi Devi"
              className="story-image"
            />
            <p className="story-testimonial">
              "With the help of SkillSetu's community forum, our Panchayat connected with an NGO and local students. Together, we conducted 3 skill workshops — tailoring, solar panel repair, and dairy management. Over 25 farmers are now earning from multiple sources. The village morale has never been higher!"
            </p>
            <h3 className="story-name">Sarpanch Lakshmi Devi</h3>
            <p className="story-role">Village Head, Rajasthan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;