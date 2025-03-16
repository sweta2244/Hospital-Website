import Top1 from "../About Us/Top1.jsx";
import { RiTimeFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { RiNavigationLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Career.css";
import {Link} from "react-router-dom";
export default function Career() {
  return (
    <div>
      <Top1 t1="Career" m1="Home" m2="Career" />
      <Vacancy />
    </div>
  );
}
function Vacancy() {
  const departments = [
    "Emergency (5)",
    "Staff NUrse (2)",
    "Lab Assistant (5)",
    "CMA/HA (2)",
    "Dr.MBBS (5)",
    "Ward Boy (2)",
    "Dr.MD (1)",
    "Radiology (2)",
    "Lab Technician (5)",
    "Pharmacy (3)",
    "Lab Assistant (5)",
  ];
  return (
    <div style={{ margin: "30px" }}>
      <p style={{ marginBottom: "10px", color: "#097FD3" }}>Career</p>
      <h1 style={{ marginBottom: "10px", color: "#143450" }}>
        Our Latest Vacency
      </h1>
      <p style={{ color: "#6D6E70" }}>
        We&apos;re looking for passionate and skilled professionals to join our
        team and provide exceptional healthcare services to our patients.
      </p>
      <h2 style={{ marginTop: "20px", marginBottom: "20px", color: "#555555" }}>
        I&apos;m insterested in
      </h2>
      <div>
        <select
          style={{
            padding: "9px",
            borderRadius: "7px",
            marginRight: "30px",
            color: "#6D6E70",
          }}
        >
          <option value="Select Category">Select Category</option>
        </select>
        <button
          style={{
            padding: "9px",
            borderRadius: "7px",
            borderStyle: "none",
            backgroundColor: "#234CBB",
          }}
        >
          Find vacancy
        </button>
        <button
          style={{
            padding: "9px",
            borderRadius: "7px",
            backgroundColor: "#C2EAED",
            color: "#00A0AA",
            borderStyle: "none",
            marginLeft: "300px",
          }}
        >
          <Link to="/SubCareer">Drop Your Profile/CV</Link>
        </button>
      </div>
      <h2 style={{ marginTop: "20px", marginBottom: "20px", color: "#6D6E70" }}>
        Job Opening
      </h2>
      <div className="flex-main-div" style={{ display: "flex", gap: "20px" }}>
        <div
          style={{
            border: "1px solid #00000033",
            padding: "8px",
            paddingRight: "80px",
          }}
        >
          <h4 style={{ color: "#234CBB", padding: "15px" }}>
            All Departments (22)
          </h4>
          <ul
            style={{
              listStyle: "none",
              marginTop: "10px",
              lineHeight: "37px",
              color: "#6D6E70",
            }}
          >
            {departments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div style={{ width: "80%" }} className="main--box">
          <IndiDepart />
        </div>
      </div>
    </div>
  );
}
function IndiDepart() {
  const message1 = [
    "we're looking for a Lab Technician with at least 1 year of experience in Laboratory Field.",
    "we're looking for a Lab Technician with at least 1 year of experience in Laboratory Field.",
    "we're looking for a Lab Technician with at least 1 year of experience in Laboratory Field.",
    "we're looking for a Lab Technician with at least 1 year of experience in Laboratory Field.",
  ];
  const jobTitle = [
    "Lab Technician",
    "Staff Nurse",
    "Dr.MBBS MD",
    "Radiologist",
  ];
  return (
    <div className="scroll1">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div className="indidepart1" key={i}>
          <div className="flex-2-small">
            <h4>{jobTitle[i - 1]}</h4>
            <p>{message1[i - 1]}</p>
            <div style={{ display: "flex", gap: "10%", marginTop: "10px" }}>
              <div className="icons-3">
                <RiTimeFill />
                <p>Full Time</p>
              </div>
              <div className="icons-3">
                <FaUser />
                <p>2</p>
              </div>
              <div className="icons-3">
                <RiNavigationLine />
                <p>Kathmandu</p>
              </div>
            </div>
          </div>
          <div className="align-right">
            <button>View Details</button>
            <p>
              Share on: <FaFacebook /> <FaInstagram /> <FaTwitter />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
