import { useState } from "react";
import "./Say1.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Say1() {
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

  const [index, setIndex] = useState(0);

  function handleLClick() {
    setIndex((prev) => (prev > 0 ? prev - 1 : description.length - 1)); // Loop back to last
  }

  function handleRClick() {
    setIndex((prev) => (prev < description.length - 1 ? prev + 1 : 0)); // Loop back to first
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
          <h2 style={{ fontSize: "40px" }}>What They Say About Us</h2>
          <div className="say-button">
            <button onClick={handleLClick} style={{ color: "blue" }}>
              <FaArrowLeft size={25} />
            </button>
            <button onClick={handleRClick} style={{ color: "blue" }}>
              <FaArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>

      <div className="slider-container">
        {description.map((item, i) => (
          <div
            key={i}
            className="slider"
            style={{
              transform: `translate(-${index * 100}%)`, // Move based on the number of boxes
              transition: "transform 0.5s ease-in-out",
              display: "flex",
              justifyContent: "center",
              minWidth: "100%", // Set the width to accommodate all boxes
            }}
          >
            <div className="say-box">
              <img
                src="/Image/up.png"
                alt="up"
                style={{ marginBottom: "10px"}}
              />
              <p style={{ fontSize: "18px", marginBottom: "20px" }}>
                {item.message}
              </p>
              <div className="outer-flex">
                <div className="inner-flex">
                  <div className="say-image">
                    <img src={item.img} alt="doctor" />
                  </div>
                  <div>
                    <p style={{ fontSize: "25px" }}>{item.name}</p>
                    <p style={{ fontSize: "16px" }}>{item.position}</p>
                  </div>
                </div>
                <div className="downz">
                  <img src="/Image/down.png" alt="down" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
