import Top1 from "../About Us/Top1";
import "./ImageGallery.css";
import "./VideoGallery.css";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { FaYoutube } from "react-icons/fa";

export default function VideoGallery() {
  return (
    <div className="main-div-video-galley">
      <Top1 t1="Media" m1="Home" m2="Video Gallery" />
      <div style={{ margin: "30px" }}>
        <p style={{ marginBottom: "10px", color: "#097FD3" }}>Media</p>
        <h1 style={{ marginBottom: "10px", color: "#143450" }}>Video Gallery</h1>
        <div className="video-image">
          <div className="iframe-video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/bA29UkAWZ-4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <p>Best Hospital In Nepal</p>
            <div className="label-flex-justify">
              <div className="label-gap-flex">
                <FaYoutube color="red"/>
                <p>YouTube</p>
              </div>
              <HiOutlineInformationCircle size={20}/>
            </div>
          </div>
          <div className="iframe-video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/bA29UkAWZ-4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <p>Best Hospital In Nepal</p>
            <div className="label-flex-justify">
              <div className="label-gap-flex">
                <FaYoutube color="red"/>
                <p>YouTube</p>
              </div>
              <HiOutlineInformationCircle size={20}/>
            </div>
          </div>
          <div className="iframe-video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/bA29UkAWZ-4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <p>Best Hospital In Nepal</p>
            <div className="label-flex-justify">
              <div className="label-gap-flex">
                <FaYoutube color="red"/>
                <p>YouTube</p>
              </div>
              <HiOutlineInformationCircle size={20}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

