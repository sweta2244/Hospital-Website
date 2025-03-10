import "./HeroSection.css";
export default function HeroSection({handle}) {
  return (
    <div className="headerImage">
      <div className="headerText">
        <div>
          <h1 style={{ fontSize: "50px", color: "#143450", lineHeight:"68.2px" }}>
            Health is a state of complete physical mental and social well-being
          </h1>
          <br />
          <p style={{ fontSize: "18px", color:"#143450", lineHeight:"30px"}}>
            Hospital is always ready to provide the best health care service in
            accordance with the national standards and also ethical
            considerations.
          </p>
          <br />
          <button
            style={{
              backgroundColor: " #00A0AA",
              borderRadius: "8px",
              padding: "15px",
              borderStyle: "none",
              color:"white",
              fontSize:"20px"
            }}
            onClick={handle}
          >
            Book An Appointment &gt;
          </button>
        </div>
      </div>
      <div className="right-section" >
        <img src="Image/doctor.png" alt="doctor"/>
      </div>
    </div>
  );
}
