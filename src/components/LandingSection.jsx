import "../App.css";
import landingImg from "../assets/LandingImg2.jpeg";

// 
import {useNavigate} from "react-router-dom"

const LandingSection = () => {
  const navigate=useNavigate();
  return (
    <>
      <div className="landing-section">
        <div>
          <div className="LeftSec1">
            <h1>SkillSetu</h1>

            <h2>Empowering Bharat — हर गाँव, हर हाथ को हुनर</h2>
            <div className="Div1ButtonSec1">
              <button onClick={()=>navigate("/signuppartner")}>Become a Partner</button>
              <button onClick={()=>navigate("/joinlearner")}>Join as learner</button>
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