import { useState } from "react";
import "./Say.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
export default function Say() {
  const description = [
    {
      message:
        "South City Himal Hospital is a multi-disciplinary tertiary care hospital situated in Kathmandu. With over 25 years of experience and expertise, we have been providing quality and affordable healthcare to the community.",
      name: "Dr.Bhagwan Koirala",
      position: "Senior Cardiothoracic surgeon",
      img: "/Image/1p.png",
    },
    {
      message:
        "South City Himal Hospital is a multi-disciplinary tertiary care hospital situated in Kathmandu. With over 25 years of experience and expertise, we have been providing quality and affordable healthcare to the community.",
      name: "Dr.Sweta Dhungel",
      position: "Senior Cardiothoracic surgeon",
      img: "/Image/2p.png",
    },
    {
      message:
        "South City Himal Hospital is a multi-disciplinary tertiary care hospital situated in Kathmandu. With over 25 years of experience and expertise, we have been providing quality and affordable healthcare to the community.",
      name: "Dr.Samrakshan Poudel",
      position: "Senior Cardiothoracic surgeon",
      img: "/Image/3p.png",
    },
  ];
  const [click, onClick] = useState(0);
  function handleLClick(n){
    if (n===-1){
      onClick(0);
    }
    else{
      onClick(n);
    }
  }
  function handleRClick(n){
    if (n===3){
      onClick(2);
    }
    else{
      onClick(n);
    }
  }
  return (
    <div className="say">
      <div>
        <p style={{ fontSize: "18px" }}>Testimonial</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <div>
            <h2 style={{ fontSize: "40px" }}>What They say about Us</h2>
          </div>
          <div className="say-button">
            <button onClick={()=>handleLClick(click-1)} style={{ color: "blue" }}>
              <FaArrowLeft size={25} />
            </button>
            <button onClick={()=>handleRClick(click+1)} style={{ color: "blue" }}>
              <FaArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div className="say-box">
          <img src="/Image/up.png" alt="up" style={{ marginBottom: "10px" }} />
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            {description[click].message}
          </p>
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="outer-flex"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
              className="inner-flex"
            >
              <div className="say-image">
                <img src={description[click].img} alt="doctor5" />
              </div>
              <div style={{ alignContent: "center" }}>
                <p style={{ fontSize: "25px" }}>{description[click].name}</p>
                <p style={{ fontSize: "16px" }}>
                {description[click].position}
                </p>
              </div>
            </div>
            <div className="downz">
              <img
                src={"/Image/down.png"}
                alt="down"
                style={{
                  width: "74px",
                  height: "61px",
                  transform: "translate(0,150%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
