import React from 'react';
import '../App.css';

const SponsorsAndPartners = () => {
  return (
    <section className="sponsors-section">
      <div className="sponsors-container">
        <h1 className="sponsors-heading">Partners & Sponsors</h1>
        <div className="sponsors-grid">
          <div className="sponsor-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ministry_of_Agriculture_India.svg/500px-Ministry_of_Agriculture_India.svg.png"
              alt="Ministry of Agriculture India"
              className="sponsor-image"
            />
          </div>
          <div className="sponsor-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/c/c4/Rajiv_Gandhi_Proudyogiki_Vishwavidyalaya_logo.png"
              alt="Rajiv Gandhi Proudyogiki Vishwavidyalaya"
              className="sponsor-image"
            />
          </div>
          <div className="sponsor-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/e6/LNCT_Bhopal_Logo.png"
              alt="LNCT Bhopal"
              className="sponsor-image"
            />
          </div>
          <div className="sponsor-card">
            <img
              src="https://cdn.digitalindiacorporation.in/wp-content/themes/di-child/assets/images/digital-india.svg.gzip"
              alt="Digital India"
              className="sponsor-image"
            />
          </div>
          <div className="sponsor-card">
            <img
              src="https://scontent.fbho2-1.fna.fbcdn.net/v/t39.30808-1/352011716_212317651744938_8400606302718362238_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=f907e8&_nc_ohc=kURt9YCIyIkQ7kNvwEpvmBV&_nc_oc=AdkAepE0Qf41oJRuOEAy-rHapqgkJ-49QQ_oQnrz7o2buKd_JOoSeo9tydeVSQydOEQ6N6zBKJU52uUGiIAYi3tY&_nc_zt=24&_nc_ht=scontent.fbho2-1.fna&_nc_gid=FQ6s_Z-QgxhLxxo4L7uuKA&oh=00_AfFzJAU6vLPk3vuF45DJtNO4hTOU1yIHc5JP7nWRl-EDPw&oe=68068401"
              alt="Sponsor Logo"
              className="sponsor-image"
            />
          </div>
          <div className="sponsor-card">
            <img
              src="https://www.skillindiadigital.gov.in/assets/new-ux-img/skill-india-big-logo.svg"
              alt="Skill India Digital"
              className="sponsor-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsAndPartners;