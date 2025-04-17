import React from 'react';
import '../App.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h1 className="features-heading">Features</h1>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon farming-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8.25V9M15.75 9.75C15.75 11.5 14.25 12.75 12 12.75C9.75 12.75 8.25 11.5 8.25 9.75C8.25 8 9.75 6.75 12 6.75C14.25 6.75 15.75 8 15.75 9.75ZM6 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V6C20.25 4.75736 19.2426 3.75 18 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V18C3.75 19.2426 4.75736 20.25 6 20.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 16.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Skill-Based Microlearning for Farmers</h3>
            <p>Short, engaging video reels created by students help farmers learn high-demand skills tailored to nearby industries — all in regional languages and easy formats.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon ai-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>AI-Powered Learning Roadmaps</h3>
            <p>An intelligent AI chatbot guides users by generating personalized skill roadmaps with clickable paths, resource links, and a visual learning journey.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon community-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20H7M17 20C18.1046 20 19 19.1046 19 18V9.82843C19 9.29799 18.7893 8.78929 18.4142 8.41421L13.5858 3.58579C13.2107 3.21071 12.702 3 12.1716 3H6C4.89543 3 4 3.89543 4 5V18C4 19.1046 4.89543 20 6 20H7M17 20H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 13H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 17H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Community Collaboration Hub</h3>
            <p>A dedicated space where RGPV students, industry mentors, NGOs, and gram panchayats connect to enable mentoring, discussion, and local project execution.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon certificate-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Certified & Job-Ready Programs</h3>
            <p>SkillSetu offers both free and premium upskilling programs with guaranteed job support and certificates — opening new career paths for rural learners.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;