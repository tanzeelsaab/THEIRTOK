/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LeftButton, RightButton } from "../assets";
import VideoColumn from "./videoColumn";

const allCategories = [
  { title: "dare_tok", controversy: 3 },
  { title: "sad_tok", controversy: 1 },
  { title: "clean_tok", controversy: 0 },
  { title: "quack_tok", controversy: 3 },
  { title: "beauty_tok", controversy: 2 },
  { title: "kids_tok", controversy: 1 },
  { title: "animal_tok", controversy: 0 },
];

const Home = () => {
  //routing hook use for naviagting to about page
  const navigate = useNavigate();

  // initial toks to show
  const [categories, setCategories] = useState([
    { title: "dare_tok", controversy: 3 },
    { title: "sad_tok", controversy: 1 },
    { title: "clean_tok", controversy: 0 },
    { title: "quack_tok", controversy: 3 },
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    // logic for carousel behaviour
    if (categories.length > 0) {
      const allCatCopy = [...allCategories];
      const updatedArray = allCatCopy.slice(currentStep, forward ? currentStep + 4 : currentStep - 4)
      setCategories([...updatedArray]);
    }
  }, [currentStep, categories.length]);

  return (
    <div className="main-box-border">
      <div className="top-con bottom-border">
        <div className="hide"></div>
        <div className="top-con top-con-res">
          <button
            className="btn"
            onClick={() => {
              setForward(false)
              setCurrentStep(currentStep > 0 ? currentStep - 1 : allCategories.length)
            }}
          >
            <LeftButton />
          </button>
          <div className="title">
            THEIRTOK{" "}
            <button
              className="small-btn"
              onClick={() => navigate("/about")}
            >
              i
            </button>
          </div>
          <button
            className="btn"
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            <RightButton />
          </button>
        </div>
        <button
          className="btn about-btn-hide"
          onClick={() => navigate("/about")}
        >
          about
        </button>
      </div>

      <div className="main-container">
        {categories.map(({ title, controversy }, i) => (
          <VideoColumn
            type={title}
            key={title}
            isLast={i + 1 === categories.length}
            controversy={controversy}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
