import { useState } from "react";
import Top1 from "../About Us/Top1";
export default function Departments1() {
    const names=["Laser Skin Rejuvenation","Co2 Fractional Laser","Tatoo And Birthmark Removal","Hydrafacial","Derma Roller","Micro Botox","Fillers","Mesotherapy","Laser Skin Resurfacing","Picosecond Laser","Diode Laser Hair Removal","LED Light Therapy","Botox","Microdermabrasion","Chemical Peeling","PRP Therapy"]
    // const [input,setInput]=useState([]);
    // const[change,setChange]=useState("");
    // function handleChange(e){
    //   setChange(e.target.value);
    // }
    // function submitAction(e){
    //   e.preventDefault();
    //   if (change){
    //     setInput((inp)=>[...inp,change]);
    //     console.log(input);
    //     setChange("");
    //   }
    // }
  return (
    <div>
      <Top1 t1="Department" m1="Home" m2="Department"/>
      <div style={{margin:"30px"}}>
        <p style={{marginBottom:"10px",color:"#097FD3"}}>Department</p>
        <h1 style={{marginBottom:"10px", color:"#143450"}}> Aesthetic Medicine And Dermatology</h1>
        <p style={{marginBottom:"10px"}}>“Healthy skin begins the moment you decide to take care of yourself”
        SCH Hospital Aesthetic department is one place for all kinds of skin, hair and nail problems. Its aim is to provide affordable and best care to its clients. We deal with all skin , hair and nail problems, be it general or cosmetic. Our team members are experts in their field , with many years of experience. Our Medical and administration teams are always there to provide their clients with any kind of information they inquire about. “Invest in your skin, it&apos;s going to represent you for a long period of time”.  Remember us for Healthier and radiant looking skin.</p>
        <p style={{marginBottom:"20px"}}>“Healthy skin begins the moment you decide to take care of yourself”
        SCH Hospital Aesthetic department is one place for all kinds of skin, hair and nail problems. Its aim is to provide affordable and best care to its clients. We deal with all skin , hair and nail problems, be it general or cosmetic. Our team members are experts in their field , with many years of experience. Our Medical and administration teams are always there to provide their clients with any kind of information they inquire about. “Invest in your skin, it&apos;s going to represent you for a long period of time”.  Remember us for Healthier and radiant looking skin.</p>
        <h2 style={{marginBottom:"15px", color:"#143450"}}>We Provide The Best Aesthetic Medicine And Dermatology Services For You.</h2>
        <ul style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)",gap:"15px",justifyContent:"space-between",listStyle:"none",marginBottom:"30px"}}>
          {names.map((x,index)=><li key={index}>{x}</li>)}
        </ul>
        <h2 style={{marginBottom:"15px", color:"#143450"}}>Related Doctor&apos;s</h2>
        <div className="consultants">
          <IndividualConsultant src="/Image/ruit.png" name="Dr.Sanduk Ruit" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
          <IndividualConsultant src="/Image/koirala.png" name="Dr.Bhagwan Koirala" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
          <IndividualConsultant src="/Image/thapa.png" name="Dr.Prabin Bikram Thapa" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
          <IndividualConsultant src="/Image/prabin.png" name="Dr.Prabin Bikram Thapa" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
          <IndividualConsultant src="/Image/bohara.png" name="Dr. Devi Bohara" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
        </div>
        {/* <form method="POST" onSubmit={submitAction}>
          <input type="text" name="name" value={change} onChange={handleChange}/>
          <input type="submit" value="submit"/>
        </form> */}
      </div>
    </div>
  )
}

function IndividualConsultant({ src,name,post,position }){
  return <div className="individual-consultants">
      <div className="consultant-image">
          <img src={src} alt="consultants"/>
      </div>
      <h3>{name}</h3>
      <p>{post}</p>
      <p>{position}</p>
      <button style={{backgroundColor:"#143450",borderStyle:"none",color:"white",padding:"5px",borderRadius:"5px",marginTop:"5px"}}>Book Now</button>
  </div>
}