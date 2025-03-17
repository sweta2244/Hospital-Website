import Top1 from "../About Us/Top1";
import "./ImageGallery.css";
import "./VideoGallery.css";

export default function VideoGallery() {
  return (
    <div>
      <Top1 t1="Media" m1="Home" m2="Video Gallery" />
      <div style={{ margin: "30px" }}>
        <p style={{ marginBottom: "10px", color: "#097FD3" }}>Media</p>
        <h1 style={{ marginBottom: "10px", color: "#143450" }}>Video Gallery</h1>
        <div className="video-image">
          <div className="iframe-video">
            <iframe
              width="400"
              height="315"
              src="https://www.youtube.com/embed/bA29UkAWZ-4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="iframe-video">
            <iframe
              width="400"
              height="315"
              src="https://www.youtube.com/embed/bA29UkAWZ-4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="iframe-video">
            <iframe
              width="400"
              height="315"
              src="https://www.youtube.com/embed/bA29UkAWZ-4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

