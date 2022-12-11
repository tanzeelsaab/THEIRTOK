import { useEffect, useState } from "react";
// import { LeftButton, RightButton } from "../assets";
import { fetchData, getDesc, getIcon, getTitle } from "../utilities";
import { FireIcon, Loader } from "../assets";
import { isEmpty } from "lodash";

const VideoColumn = ({ type, controversy = 0, isLast }) => {
  const [data, setData] = useState([]);

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
      <div className="sub-con">
        <img height={99.6} width={99.6} src={getIcon(type)} alt="" />
        <div className="tok-details-con">
          <span className="tok-title">{getTitle(type)}</span>
          <span className="controversy">
            Controversy :{" "}
            {[...Array(controversy).keys()].map((item, i) => (
              <img src={FireIcon} alt="" key={i} />
            ))}{" "}
          </span>
          <span className="tok-desc">{getDesc(type)}</span>
        </div>
      </div>
      <div className="video-column" onScroll={handleFetchMore} id="scroll">
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
                  <video
                    width={300}
                    poster={Loader}
                    controls
                    muted
                    autoPlay
                    loop
                  >
                    <source
                      src={fields["video-data"][0].url}
                      type="video/mp4"
                    />
                  </video>
                  <div className="vid-text">
                    <div className="video-title">
                      ↗{" "}
                      <span className="video-title">
                        {fields["author"] !== undefined
                          ? fields["author"]
                          : "Unknown"}
                      </span>
                    </div>
                    <a
                      href={fields["video link"]}
                      target="_blank"
                      className="video-tags"
                      rel="noreferrer"
                      onClick={() => alert("yay")}
                    >
                      {fields["title"] !== undefined
                        ? fields["title"]
                        : "Unknown"}
                    </a>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default VideoColumn;
