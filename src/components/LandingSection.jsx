import "../App.css";
import landingImg from "../assets/LandingImg2.jpeg";

const LandingSection = () => {
  return (
    <>
      <div className="landing-section">
        <div>
          <div className="LeftSec1">
            <h1>SkillSetu</h1>

            <h2>Empowering Bharat — हर गाँव, हर हाथ को हुनर</h2>
            <div className="Div1ButtonSec1">
              <button>Become a Partner</button>
              <button>Join as learner</button>
              <button>Learn More</button>
            </div>
          </div>

          <div className="RightSec1">
            <img id="LandingImgId" src={landingImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSection;