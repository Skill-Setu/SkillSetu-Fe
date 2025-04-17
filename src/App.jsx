import LandingSection from "./components/LandingSection";
import AboutProject from "./components/AboutProject";
import Features from "./components/Features";
import SuccessStories from "./components/SuccessStories";
import SponsorsAndPartners from "./components/SponsorsAndPartners";
import { useState } from "react";
import Logo from "./assets/LogoSkillSetu.png"
import Moonlogo from "./assets/moon.svg"
import twitter from "./assets/twitterimg.png"

import "./App.css"

const Header=()=>{
  const [language,setLanguage]=useState(false);


  return (
    <>
      <div className="HeaderParent">

        <div className="LeftChild">
          <img src={Logo} alt="" />
          <h1>SkillSetu</h1>
        </div>

        <div className="RightChild">
          <div className="R-L-Child">
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Stories</li>
              <li>Partners</li>            
            </ul>
          </div>

          <div className="R-R-Child">
            <img src={Moonlogo} alt="" />

            <button onClick={()=>setLanguage((language)=>!language)}>
              {
                language?"English":"हिन्दी"
              }

            </button>
          </div>

        </div>



      </div>
    </>
  )
}


const Body=()=>{
  return (
    <>
      <LandingSection/>
      <AboutProject/>
      <Features/>
      <SuccessStories/>
      <SponsorsAndPartners/>
    </>
  )
}



const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo">
          <img id="LogoImgFooter"
            src={Logo}
            alt="SkillSetu Logo"
            className="footer-logo-image"
          />
          <h1 className="footer-logo-title">SkillSetu</h1>
        </div>

        <div className="footer-about">
          <h2 className="footer-heading">About</h2>
          <ul className="footer-links">
            <li><a href="#mission">Mission</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#impact">Impact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h2 className="footer-heading">Contact Us</h2>
          <ul className="footer-links">
            <li><a href="mailto:contact@SkillSetu.org">contact@SkillSetu.org</a></li>
            <li><a href="tel:+919123142415">9123142415</a></li>
            <li>Bhopal, Madhya Pradesh, India</li>
          </ul>
        </div>

        <div className="footer-social">
          <ul className="footer-social-links">
            <li>
              <a href="#facebook" aria-label="Facebook">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1200px-2023_Facebook_icon.svg.png"
                  alt="Facebook"
                  className="footer-social-icon"
                />
              </a>
            </li>
            <li>
              <a href="#instagram" aria-label="Instagram">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl8N2e59wNzCPzpeFnUm0gkiw5wIRGC7a_1g&s"
                  alt="Instagram"
                  className="footer-social-icon"
                />
              </a>
            </li>
            <li>
              <a href="#twitter" aria-label="Twitter">
                <img
                  src={twitter}
                  alt="Twitter"
                  className="footer-social-icon"
                />
              </a>
            </li>
            <li>
              <a href="#linkedin" aria-label="LinkedIn">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/144px-LinkedIn_icon.svg.png"
                  alt="LinkedIn"
                  className="footer-social-icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};





const App=()=>{
  return(
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
  )
}

export default App;
