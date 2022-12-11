import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="main-box-border full-height">
      <div className="bottom-border top-con">
        <div></div>
        <div className="top-con">
          <h1 className="title" onClick={() => navigate("/")}>THEIRTOK</h1>
        </div>
        <button className="btn" onClick={() => navigate("/")}>
        ← Back 
        </button>
      </div>
      <div className="about-desc-con">
        <div>
          <div className="top-margin">
            <span className="green-circle"></span> ABOUT THEIRTOK
          </div>
          <div className="about-desc">
            Almost everything we see on TikTok is recommended by an algorithm.
            What we like and do is subconsciously shaped by what the filter
            bubbles are showing us. One could even argue that we are being
            “tamed” by algorithms. But what if we can tame them back? In this
            hands-on workshop, participants become the trainers who will tame
            the recommendation algorithm behind TikTok by using custom software
            that runs on a laptop that we will provide. [1] DareTok [2] SadTok
            [3]CleanTok
          </div>
          <div className="top-margin">
            <span className="pink-circle"></span> USE THE TIKTOK ANALYZER
          </div>
          <div className="about-desc">
            Almost everything we see on TikTok is recommended by an algorithm.
            What we like and do is subconsciously shaped by what the filter
            bubbles are showing us. One could even argue that we are being
            “tamed” by algorithms. But what if we can tame them back?
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
