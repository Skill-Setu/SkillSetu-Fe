import AboutLanding from "../assets/LandingPageFFrontImg.jpeg";

const AboutProject = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <h1 className="about-heading">About the Project</h1>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              SkillSetu is a revolutionary platform dedicated to empowering rural India through 
              skill development, education, and real-world opportunities. Our mission is to connect 
              students, local farmers, industries, and gram panchayats to build a sustainable 
              and self-reliant future.
            </p>
            <p>
              Through engaging content we intent to spread awareness, real-time mentorship, 
              and AI-powered learning roadmaps, we aim to equip farmers with new skills, provide 
              students with purpose-driven roles, and help industries tap into skilled rural manpower. 
            </p>
            <p>
              From free upskilling courses and certification perks to guaranteed job programs, 
              SkillSetu is creating a powerful ecosystem of growth, collaboration, and transformation.
            </p>
            <p className="highlight-text">
              Together, we are not just bridging the gap between education and employment — 
              we are building a new Bharat where every hand is skilled and every village is empowered.
            </p>
          </div>
          
          <div className="about-image">
            <img src={AboutLanding} alt="Empowering rural communities" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;