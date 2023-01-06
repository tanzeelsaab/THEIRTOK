/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LeftButton, RightButton } from "../assets";
import { useWindowSize } from "../utilities";
import VideoColumn from "./videoColumn";

const allCategories = [
  { title: "dare_tok", controversy: 3 },
  { title: "sad_tok", controversy: 1 },
  { title: "clean_tok", controversy: 0 },
  { title: "quack_tok", controversy: 3 },
  { title: "beauty_tok", controversy: 2 },
  { title: "kid_tok", controversy: 1 },
  { title: "animal_tok", controversy: 0 },
  { title: "kid_tok", controversy: 1 },
];

const Home = () => {
  //routing hook use for naviagting to about page
  const navigate = useNavigate();

  const { width } = useWindowSize();

  // initial toks to show
  const [categories, setCategories] = useState([
    { title: "dare_tok", controversy: 3 },
    { title: "sad_tok", controversy: 1 },
    { title: "clean_tok", controversy: 0 },
    { title: "quack_tok", controversy: 3 },
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [forward, setForward] = useState(true);

  const handleRightArrow = () => {
    setCurrentStep(currentStep + 1);
    if (currentStep > allCategories.length - 5) {
      setCurrentStep(0);
    }
    setCategories([
      allCategories[currentStep],
      allCategories[currentStep + 1],
      allCategories[currentStep + 2],
      allCategories[currentStep + 3],
    ]);
  };

  const handleLeftArrow = () => {
    setCurrentStep(currentStep - 1);
    if (currentStep < 0) {
      setCurrentStep(allCategories.length - 4);
    }
    setCategories([
      allCategories[currentStep],
      allCategories[currentStep + 1],
      allCategories[currentStep + 2],
      allCategories[currentStep + 3],
    ]);
  };
  // useEffect(() => {
  //   // logic for carousel behaviour
  //   if (categories.length > 0) {
  //     const allCatCopy = [...allCategories];
  //     const updatedArray = allCatCopy.slice(
  //       forward ? currentStep : currentStep - 4,
  //       forward ? currentStep + 4 : currentStep - 4
  //     );
  //     setCategories([...updatedArray]);
  //   }
  // }, [currentStep, categories.length]);

  return (
    <div className="main-box-border">
      <div className="top-con bottom-border">
        <div className="hide"></div>
        <div className="top-con top-con-res">
          <button className="btn" onClick={handleLeftArrow}>
            <LeftButton />
          </button>
          <div className="title">
            THEIRTOK{" "}
            <button className="small-btn" onClick={() => navigate("/about")}>
              i
            </button>
          </div>
          <button className="btn" onClick={handleRightArrow}>
            <RightButton />
          </button>
        </div>
        <button
          className="btn about-btn-hide right-margin"
          onClick={() => navigate("/about")}
        >
          about
        </button>
        <div className="extra-div"></div>
      </div>

      <div className="main-container">
        {categories.map(({ title = "", controversy = "" }, i) => {
        if(i+1 <= Math.floor(width/320)){
          console.log(i)
          return (
            <VideoColumn
              type={title}
              key={title}
              singleRow={Math.floor(width/320) <= 1}
              isLast={i + 1 === categories.length}
              controversy={controversy}
            />
          )
        }
        })}
      </div>
    </div>
  );
};

export default Home;
