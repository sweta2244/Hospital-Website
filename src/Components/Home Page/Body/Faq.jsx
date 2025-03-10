import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "./Faq.css";
export default function Faq(){
    return <div style={{backgroundColor:"rgb(233, 238, 238)",padding:"48px"}}>
        <h1 style={{marginBottom:"20px"}}>FAQ</h1>
        <p style={{marginBottom:"20px",marginRight:"1%"}}>The history of hospital service in Nepal starts in the year 1889 with the establishment of South himal Hospital, the oldest hospital now providing general care to tertiary care to the people of Nepal. South himal hospital is the first teaching hospital for compounders, dresser and later nurses. </p>
        <div>
            <Description/>
            <Description/>
            <Description/>
            <Description/>
            <Description/>
        </div>
    </div>
}

function Description(){
    const message1="Getting started with DynamicAMS is easy. You can schedule a demo by entering your company name, email address, and phone number by clicking on the Request a Demo button, and you&apos;re in business. DynamicAMS offers you a fully-functional demo period before you subscribe.";
    const[visibility,setVisibility]=useState(false);
    return <div className="faq-box" style={{margin:"1%",marginRight:"2%"}}>
        <div className="faq-title" style={{marginBottom:"15px"}}>
            <h3 style={{color:"#234CBB"}}>The general surgery services are included under the Department of surgery</h3>
            <button className="btn" onClick={()=>visibility?setVisibility(false):setVisibility(true)}>{visibility?<p><FaMinus size={20}/></p>:<p><FaPlus size={20}/></p>}</button>
        </div>
        {visibility&&<p>{message1}</p>}
    </div>
}
