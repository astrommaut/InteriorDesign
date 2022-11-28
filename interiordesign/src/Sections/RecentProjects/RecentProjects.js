import React from "react";
import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
import video3 from "./video3.mp4";
import "../../../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import "./RecentProjects.css";
function RecentProjects() {
  return (
    <div className="container mt-4 mb-4 pt-5 pb-5 rowBg recentProjects">
      <div className="row text-center">
        <h2>Our Recent Interior Design Projects We Completed</h2>
      </div>
      <div className="row text-center">
        <div className="col-xl-4 col-lg-4 col-xxl-4 col-sm-12 col-xs-12 mt-4">
          {" "}
          <Player playsInline src={video1} />
          <p className="mt-2">
            {" "}
            Enjoy 10% off your first project: Code{" "}
            <span className="span-video">FIRST10</span>
          </p>
        </div>
        <div className="col-xl-4 col-lg-4 col-xxl-4 col-sm-12 col-xs-12 mt-4">
          {" "}
          <Player playsInline src={video2} />
          <p className="mt-2">
            {" "}
            Enjoy 10% off your first project: Code{" "}
            <span className="span-video">FIRST10</span>
          </p>
        </div>
        <div className="col-xl-4 col-xxl-4 col-lg-4 col-sm-12 col-xs-12 mt-4">
          {" "}
          <Player playsInline src={video3} />
          <p className="mt-2">
            {" "}
            Enjoy 10% off your first project: Code{" "}
            <span className="span-video">FIRST10</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;
