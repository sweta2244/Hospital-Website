import Top1 from "../About Us/Top1.jsx";
import "../Home Page/Body/OurChief.css"
import IndividualConsultants from "../Home Page/Body/IndividualConsultants.jsx";

export default function Departments2({handle}) {
    function setPageFirst(){
        setDoctor("Dr. Pashupati");
        setDepart("DRMATOLOGIST");
    }
  return (
    <div>
        <Top1 t1="Department" m1="Home" m2="Department"/>
        <div style={{margin:"30px"}}>
            <p style={{marginBottom:"10px",color:"#097FD3"}}>Department</p>
            <h1 style={{marginBottom:"10px", color:"#143450"}}> Aesthetic Medicine And Dermatology</h1>
            <p style={{marginBottom:"10px"}}>“Healthy skin begins the moment you decide to take care of yourself”
            SCH Hospital Aesthetic department is one place for all kinds of skin, hair and nail problems. Its aim is to provide affordable and best care to its clients. We deal with all skin , hair and nail problems, be it general or cosmetic. Our team members are experts in their field , with many years of experience. Our Medical and administration teams are always there to provide their clients with any kind of information they inquire about. “Invest in your skin, it&apos;s going to represent you for a long period of time”.  Remember us for Healthier and radiant looking skin.</p>
            <h2 style={{marginBottom:"10px",marginTop:"50px", color:"#143450"}}> Aesthetic Medicine And Dermatology</h2>
            <p style={{marginBottom:"10px"}}>“Healthy skin begins the moment you decide to take care of yourself”
            SCH Hospital Aesthetic department is one place for all kinds of skin, hair and nail problems. Its aim is to provide affordable and best care to its clients. We deal with all skin , hair and nail problems, be it general or cosmetic. Our team members are experts in their field , with many years of experience. Our Medical and administration teams are always there to provide their clients with any kind of information they inquire about. “Invest in your skin, it&apos;s going to represent you for a long period of time”.  Remember us for Healthier and radiant looking skin.</p>
            <h2 style={{marginBottom:"10px",marginTop:"50px", color:"#143450"}}>Related Doctor&apos;s</h2>
            <div className="consultants">
                <IndividualConsultants src="/Image/koirala.png" name="Dr. Pashupati" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
            </div>
            <div style={{width:"24%",display:"flex",justifyContent:"center"}}>
                <button onClick={()=>{handle();setPageFirst()}} style={{padding:"10px",backgroundColor:"#143450",color:"white"}}>Book now</button>
            </div>
        </div>
    </div>
  )
}
