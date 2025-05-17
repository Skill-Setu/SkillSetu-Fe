// JoinPartners Component
import { useState } from "react";
import Logo from "../assets/LogoSkillSetu.png";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const JoinPartners = () => {
  const navigate = useNavigate();
  const [hoverLogin, setHoverLogin] = useState(false);
  const [hoverRegister, setHoverRegister] = useState(false);

  return (
    <div className="auth-container Parent-JoinPartners">
      <header className="auth-header">
        <div className="auth-logo" onClick={() => navigate("/")}>
          <img src={Logo} alt="SkillSetu Logo" />
          <h1>SkillSetu</h1>
        </div>
        <Link to="/" className="back-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Home
        </Link>
      </header>

      <div className="auth-content">
        <div className="auth-card">
          <div className="auth-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1>Join as Partner</h1>
          <p>
            Become a SkillSetu partner and help empower rural communities with valuable skills and opportunities.
          </p>

          <div className="partners-benefits">
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="benefit-text">
                Connect with skilled rural talent
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="benefit-text">
                Contribute to community development
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="benefit-text">
                Access government skill development initiatives
              </div>
            </div>
          </div>

          <div className="auth-actions">
            <button 
              className="auth-btn"
              onMouseEnter={() => setHoverLogin(true)}
              onMouseLeave={() => setHoverLogin(false)}
              style={{
                transform: hoverLogin ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: hoverLogin ? '0 4px 12px rgba(14, 124, 63, 0.2)' : 'none'
              }}
            >
              Login
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="auth-separator">
              <span>OR</span>
            </div>
            
            <button 
              className="auth-btn auth-btn-secondary"
              onMouseEnter={() => setHoverRegister(true)}
              onMouseLeave={() => setHoverRegister(false)}
              style={{
                transform: hoverRegister ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: hoverRegister ? '0 4px 12px rgba(14, 124, 63, 0.1)' : 'none'
              }}
            >
              Register with us
            </button>
          </div>

          <div className="auth-footer">
            Need more information? <a href="#contact">Contact our team</a>
          </div>
        </div>
      </div>
    </div>
  );
};

// JoinLearner Component
const JoinLearner = () => {
  const navigate = useNavigate();
  const [hoverLogin, setHoverLogin] = useState(false);
  const [hoverSignup, setHoverSignup] = useState(false);

  return (
    <div className="auth-container Parent-JoinLearner">
      <header className="auth-header">
        <div className="auth-logo" onClick={() => navigate("/")}>
          <img src={Logo} alt="SkillSetu Logo" />
          <h1>SkillSetu</h1>
        </div>
        <Link to="/" className="back-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Home
        </Link>
      </header>

      <div className="auth-content">
        <div className="auth-card">
          <div className="auth-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14L12 22M12 14L16 18M12 14L8 18M19 17V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V17M21 9H3M21 9C21.5523 9 22 8.55228 22 8V4C22 3.44772 21.5523 3 21 3H3C2.44772 3 2 3.44772 2 4V8C2 8.55228 2.44772 9 3 9M21 9V15C21 15.5523 20.5523 16 20 16H4C3.44772 16 3 15.5523 3 15V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h1>Join as Learner</h1>
          <p>
            Start your learning journey with SkillSetu and gain valuable skills that empower your future.
          </p>

          <div className="auth-actions">
            <button 
              className="auth-btn"
              onMouseEnter={() => setHoverLogin(true)}
              onMouseLeave={() => setHoverLogin(false)}
              style={{
                transform: hoverLogin ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: hoverLogin ? '0 4px 12px rgba(14, 124, 63, 0.2)' : 'none'
              }}
            >
              Login
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="auth-separator">
              <span>OR</span>
            </div>
            
            <button 
              className="auth-btn auth-btn-secondary"
              onMouseEnter={() => setHoverSignup(true)}
              onMouseLeave={() => setHoverSignup(false)}
              style={{
                transform: hoverSignup ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: hoverSignup ? '0 4px 12px rgba(14, 124, 63, 0.1)' : 'none'
              }}
            >
              Sign Up
            </button>
          </div>

          <div className="auth-separator">
            <span>OR CONTINUE WITH</span>
          </div>

          <div className="social-login">
            <button className="social-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" fill="#4285F4"/>
                <path d="M12.956 16.83c-1.015 0-1.889-.351-2.55-.956l1.584-1.381c.426.365 1.015.609 1.695.609 1.381 0 2.511-1.015 2.814-2.355l.304-.934h-4.63v-2.111h6.61c0 3.716-2.112 7.128-5.827 7.128z" fill="#34A853"/>
                <path d="M7.545 14.207l-2.925 2.396C3.328 15.241 2.507 13.341 2.507 11.26c0-1.727.669-3.31 1.747-4.518l2.633 2.111c-.609.934-.974 2.031-.974 3.209 0 .77.193 1.503.548 2.145z" fill="#FBBC05"/>
                <path d="M12.956 5.98c1.624 0 3.086.669 4.224 1.747l-2.6 2.599c-.67-.669-1.584-1.076-2.54-1.076-2.478 0-4.467 2.112-4.467 4.67 0 .71.14 1.381.385 1.991l-2.633-2.111c-.609-1.177-.974-2.518-.974-3.919 0-4.832 3.919-8.751 8.751-8.751z" fill="#EA4335"/>
              </svg>
            </button>
            <button className="social-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill="#1877F2"/>
                <path d="M16.673 14.89l.443-2.89h-2.773v-1.876c0-.791.387-1.562 1.63-1.562h1.26v-2.46s-1.144-.195-2.238-.195c-2.285 0-3.777 1.384-3.777 3.89V12h-2.54v2.89h2.54v6.988a10.1 10.1 0 003.124 0v-6.988h2.33z" fill="#ffffff"/>
              </svg>
            </button>
            <button className="social-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.891 1.529 2.341 1.087 2.91.832.092-.646.35-1.086.634-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.02 10.02 0 0022 12c0-5.523-4.477-10-10-10z" fill="#24292F"/>
              </svg>
            </button>
          </div>

          <div className="auth-footer">
            Already have an account? <a href="#login">Login here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { JoinPartners, JoinLearner };