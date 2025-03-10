import { useState } from "react";
import "./Message.css";
import Top1 from "./Top1.jsx";
export default function Message() {
    const identification=[{index:0,name:"Ram1",position:"position1"},{index:1,name:"Ram2",position:"position2"},{index:2,name:"Ram3",position:"position3"}];
    const[isClicked,setIsClicked]=useState({index:0,name:"Ram1",position:"position1"});
    function handleClick(n){
      setIsClicked(identification[n])
    }
  return (
    <div>
        <Top1 t1="About Us" m1="About Us" m2="Message"/>
        <div style={{ marginLeft: "30px" }}>
          <p style={{ color: "#097FD3", marginBottom: "10px", marginTop: "10px" }}>
            About Us
          </p>
          <h2 style={{marginBottom:"20px"}}>Message</h2>
          <div style={{display:"flex",gap:"50px"}}>
            <div className="blur-image">
                <button onClick={()=>handleClick(0)} style={{filter:isClicked.index===0?"blur(0)":""}}><img src="/Image/koirala.png" alt="doc1" style={{border:isClicked.index===0?"1px solid blue":""}}/></button>
                <button onClick={()=>handleClick(1)} style={{filter:isClicked.index===1?"blur(0)":""}}><img src="/Image/thapa.png" alt="doc1" style={{border:isClicked.index===1?"1px solid blue":""}}/></button>
                <button onClick={()=>handleClick(2)} style={{filter:isClicked.index===2?"blur(0)":""}}><img src="/Image/prabin.png" alt="doc1" style={{border:isClicked.index===2?"1px solid blue":""}}/></button>
            </div>
            <div>
                <h3 style={{textAlign:"center",marginBottom:"20px"}}>We strongly believe our three pillars Talent Touch & Technology have helped us establish ourselves as one of the best corporate hospitals</h3>
                <p>Our aim has always been to establish ourselves as a multi-disciplinary hospital. We strongly believe our three pillars Talent, Touch and Technology have helped us establish ourselves as one of the best corporate hospitals in Nepal dedicated to quality patient care.</p><br/>
                <p>Our vision and activities go beyond providing reliable quality medical care to patients who come to us. We are continuously improving our services to exceed the needs and expectations of our patients. We are very proud of our team who work with compassion, dedication and commitment towards providing the best quality services to our patients and their families.</p><br/>
                <p>During the unprecedented times of Covid19 pandemic, HAMS went above and beyond to provide the best quality care to the patients. This has helped us gain the trust from the community and we are committed to continue providing the best care to our patients. We invest in the best infrastructure and technology and complement it with the most experienced staff to provide healthcare service. HAMS medical team is a unique blend of veteran doctors who pioneered in respective therapeutic areas and new age expert consultants. And, all our services are cobbled by an experienced administration team to present a reliable healthcare institution for all.</p><br/>
                <p>On the occasion of the 25th Anniversary of our hospital, we would like to thank all our wellwishers, supporters, patients and their families for their trust and support. We are committed to providing world class quality and affordable care to our community and becoming a one stop solution for all healthcare needs of our patients.</p>
                <div className="display-auto-positioning">
                  <div className="display-auto">
                      <p style={{fontSize:"30px",marginBottom:"6px"}}>{isClicked.name}</p>
                      <p>{isClicked.position}</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
