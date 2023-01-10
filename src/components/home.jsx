/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LeftButton, RightButton } from "../assets";
import { useWindowSize } from "../utilities";
import VideoColumn from "./videoColumn";

const Home = () => {
  //routing hook use for naviagting to about page
  const navigate = useNavigate();

  const { width } = useWindowSize();

  const [index, setIndex] = useState(0);
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
  const categories = allCategories.slice(index, index + 4);

  const handleRightArrow = () => {
    setIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handleLeftArrow = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
    );
  };

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
        {categories.map(({ title = "", controversy = "", speed = 1 }, i) => {
          if (i + 1 <= Math.floor(width / 320)) {
            return (
              <VideoColumn
                type={title}
                key={title}
                speed={speed}
                singleRow={Math.floor(width / 320) <= 1}
                isLast={i + 1 === categories.length}
                controversy={controversy}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Home;
