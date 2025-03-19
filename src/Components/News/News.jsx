import { useState } from "react";
import "./News.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Top1 from "../About Us/Top1";

export default function News() {
  const news = [
    {
      img: "/Image/news1.png",
      intro:
        "Handover1 of Medical ICU beds and accessories supported to Emergency",
    },
    {
      img: "/Image/news2.png",
      intro:
        "Handover2 of Medical ICU beds and accessories supported to Emergency",
    },
    {
      img: "/Image/news1.png",
      intro:
        "Handover3 of Medical ICU beds and accessories supported to Emergency",
    },
    {
      img: "/Image/news2.png",
      intro:
        "Handover4 of Medical ICU beds and accessories supported to Emergency",
    },
    {
      img: "/Image/news1.png",
      intro:
        "Handover5 of Medical ICU beds and accessories supported to Emergency",
    },
    {
      img: "/Image/news2.png",
      intro:
        "Handover6 of Medical ICU beds and accessories supported to Emergency",
    },
    {
      img: "/Image/news1.png",
      intro:
        "Handover7 of Medical ICU beds and accessories supported to Emergency",
    },
    {
      img: "/Image/news2.png",
      intro:
        "Handover8 of Medical ICU beds and accessories supported to Emergency",
    },
  ];

  const [index, setIndex] = useState(0);

  function handleLIndex(i) {
    i === -1 ? setIndex(index) : setIndex((prev) => prev - 1); // Loop to last if first is reached
  }

  function handleRIndex(i) {
    i === news.length - 2 ? setIndex(index) : setIndex((prev) => prev + 1); // Loop to first if last is reached
  }

  return (
    <div>
        <Top1 t1="News" m1="Home" m2="News"/>
        <div className="news">
          <h1>News & Events</h1>
          <div className="news-flex">
            {news.map((data, i) => (
              <div
                key={i}
                className="outerbox"
                style={{
                  borderRadius:"10px",
                  backgroundColor: "#cfd2d2",
                  transform: `translateX(-${index * 100}%)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                <Image2 img={data.img} intro={data.intro} />
              </div>
            ))}
          </div>
          {/* Buttons for navigation */}
          <div className="buttons">
            <button className="nav-buttonL" onClick={() => handleLIndex(index - 1)}>
              <FaAngleLeft size={25} color="white" />
            </button>
            <button className="nav-buttonR" onClick={() => handleRIndex(index + 1)}>
              <FaAngleRight size={25} color="white" />
            </button>
          </div>
        </div>
    </div>
);
}
        
function Image2({ img, intro }) {
    return (
        <div className="news-individual">
          <div>
            <img src={img} alt="news" />
            <button>Hospital Patients Recover</button>
            <p>{intro}</p>
          </div>
        </div>
  );
}
