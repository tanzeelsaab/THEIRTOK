import { useEffect, useRef, useState } from "react";
// import { LeftButton, RightButton } from "../assets";
import { fetchData, getDesc, getIcon, getTitle } from "../utilities";
import { FireIcon } from "../assets";
import { isEmpty } from "lodash";
import { VideoPlayer } from "./videoPlayer";

const VideoColumn = ({ type, controversy = 0, isLast, singleRow, speed }) => {
  const [data, setData] = useState([]);
  const [hovered, setHovered] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let intervalId;
    if (!isHovered) {
      intervalId = setInterval(() => {
        containerRef.current.scrollTo(
          0,
          containerRef.current.scrollTop + speed
        );
      }, 50);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isHovered, speed]);

  useEffect(() => {
    fetchData(type, 4, setData, data);
  }, []);

  const handleFetchMore = (e) => {
    const element = e.target;
    let lastScrollTop = 0;
    if (element.scrollTop < lastScrollTop) {
      // upscroll
      return;
    }
    lastScrollTop = element.scrollTop <= 0 ? 0 : element.scrollTop;
    //logic to check if user reaches to the bottom of column then fetch next set of data
    if (element.scrollTop + element.offsetHeight + 20 >= element.scrollHeight) {
      fetchData(type, data.length + 4, setData, data);
    }
  };

  return (
    <div
      className="column-main"
      style={{ borderRight: !isLast && "1px solid #e4e4e4" }}
    >
      <div
        className="sub-con"
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img height={99.6} width={99.6} src={getIcon(type)} alt="" />
        <div className="tok-details-con">
          <span className="tok-title">{getTitle(type)}</span>
          <span className="controversy">
            Controversy :{" "}
            {[...Array(controversy).keys()].map((item, i) => (
              <img src={FireIcon} alt="" key={i} />
            ))}{" "}
          </span>
          <span className={`tok-desc ${hovered && "show-item"}`}>
            {getDesc(type)}
          </span>
        </div>
      </div>
      <div
        className="video-column"
        onScroll={handleFetchMore}
        id="scroll"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={containerRef}
      >
        {!isEmpty(data) &&
          data.map(({ fields }, i) => {
            if (
              fields["video-data"] !== undefined &&
              fields["video-data"].length > 0
            ) {
              return (
                <div
                  className="video-wrapper"
                  style={{ marginBottom: i + 1 === data.length && "190px" }}
                  key={fields.id}
                  id="content"
                >
                  <VideoPlayer
                    videoUrl={fields["video-data"][0].url}
                    linkUrl={fields["video link"]}
                    singleRow={singleRow}
                    author={fields["author"]}
                    title={fields["title"]}
                  />
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default VideoColumn;
