import { useEffect, useState } from "react";
// import { LeftButton, RightButton } from "../assets";
import Airtable from "airtable";
import { getDesc, getIcon, getTitle, shuffle } from "../utilities";
import { FireIcon, Loader } from "../assets";

const VideoColumn = ({ type, controversy = 0, isLast }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    var base = new Airtable({ apiKey: "keynELsZmAFX3e52w" }).base(
      "appQx41NONtobLemr"
    );

    base(type)
      .select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 4,
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.

          setData([...shuffle(records)]);

          // records.forEach(function(record) {
          //     setData(record.fields)
          // });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }, [type]);
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
      <div className="video-column">
        {data.length > 0 &&
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
                      onClick={() => alert('yay')}
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
