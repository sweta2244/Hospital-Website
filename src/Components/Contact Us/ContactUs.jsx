import Top1 from "../About Us/Top1.jsx";
import React from "react";
import "./ContactUs.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
export default function Contact() {
  return (
    <div>
      <Top1 t1="Contact Us" m1="Home" m2="Contact Us" />
      <div
        style={{
          background:
            "radial-gradient(75.93% 75.93% at 48.64% 46.94%, #F1F4F5 37.5%, #E1F7FF 100%)",
          height: "700px",
        }}
        className="entire-box"
      >
        <div style={{ display: "flex" }} className="flex-box-2">
          <img src="/Image/get-in-touch.svg" alt="img" />
          <div
            style={{
              border: "1px solid #00000033",
              borderRadius: "5px",
              padding: "20px",
              width: "40%",
              height: "fit-content",
            }}
            className="form-get"
          >
            <h2 style={{ marginBottom: "30px" }}>Get in Touch</h2>
            <form className="form-3">
              <input type="text" name="fullname" placeholder="Full Name*" />
              <input type="email" name="email" placeholder="Email Id*" />
              <textarea
                name="message"
                rows={2}
                placeholder="Message"
                style={{ marginBottom: "1px" }}
              />
              <br />
              <input
                type="submit"
                value="Submit"
                style={{
                  width: "auto",
                  color: "white",
                  backgroundColor: "#234CBB",
                  float: "right",
                  padding: "15px 40px",
                }}
              />
            </form>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 100px",
            gap: "10px",
          }}
          className="main-flex-3"
        >
            <IndividualB d1="Address" d2="Birgunj,Nepal" icon={IoLocationOutline}/>
            <IndividualB d1="Contact" d2="051592036, 9802593288" icon={IoCallOutline}/>
            <IndividualB d1="Email Address" d2="southcityhimalhospital@gmail.com" icon={AiOutlineMail}/>
        </div>
      </div>
    </div>
  );
}

function IndividualB({d1,d2,icon}){
    return <div>
        <div className="individual-box-3">
            <div className="white-box">
              <div className="blue-box">
              {React.createElement(icon, { className: "icon-34", color: "white" })}
              </div>
            </div>
            <p>{d1}</p>
            <hr className="hr-line" />
            <p className="description">{d2}</p>
        </div>
    </div>
}