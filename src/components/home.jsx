/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LeftButton, RightButton } from "../assets";
import VideoColumn from "./videoColumn";

const allCategories = [
  "clean_tok",
  "dare_tok",
  "sad_tok",
  "quack_tok",
  "animal_tok",
  "beauty_tok",
  "kid_tok",
];

const Home = () => {
  //routing hook use for naviagting to about page
  const navigate = useNavigate();

  // initial toks to show
  const [categories, setCategories] = useState([
    "dare_tok",
    "sad_tok",
    "clean_tok",
    "quack_tok",
  ]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // logic for carousel behaviour
    if (categories.length > 0) {
      const allCatCopy = [...allCategories];
      setCategories([...allCatCopy.slice(currentStep, currentStep + 4)]);
    }
  }, [currentStep, categories.length]);

  return (
    <div className="main-box-border">
      <div className="top-con bottom-border">
        <div className="hide"></div>
        <div className="top-con top-con-res">
          <button
            className="btn"
            onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
          >
            <LeftButton />
          </button>
          <h1 className="title">THEIRTOK</h1>
          <button
            className="btn"
            onClick={() => currentStep < 3 && setCurrentStep(currentStep + 1)}
          >
            <RightButton />
          </button>
        </div>
        <button className="btn about-btn-hide" onClick={() => navigate("/about")}>
          about
        </button>
      </div>

      <div className="main-container">
        {categories.map((category) => (
          <VideoColumn type={category} key={category} />
        ))}
      </div>
    </div>
  );
};

export default Home;
