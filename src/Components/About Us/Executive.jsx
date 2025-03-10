import IndividualConsultants from "../Home Page/Body/IndividualConsultants";
import Top1 from "./Top1";

export default function Executive() {
  return (
    <div>
        <Top1 t1="About Us" m1="About Us" m2="Executive Comittee" />
        <MainPart/>
    </div>
  )
}

function MainPart(){
    return(
        <div style={{ marginLeft: "30px" }}>
            <p style={{ color: "#097FD3", marginBottom: "10px", marginTop: "10px" }}>
                About Us
            </p>
            <h2 style={{ marginBottom: "40px" }}>Executive Comittee</h2>
            <h2 style={{marginBottom:"20px"}}>Senior Management Team</h2>
            <div className="consultants">
                <IndividualConsultants src="/Image/ruit.png" name="Dr.Sanduk Ruit" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
                <IndividualConsultants src="/Image/koirala.png" name="Dr.Bhagwan Koirala" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
                <IndividualConsultants src="/Image/thapa.png" name="Dr.Prabin Bikram Thapa" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
                <IndividualConsultants src="/Image/prabin.png" name="Dr.Prabin Bikram Thapa" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
                <IndividualConsultants src="/Image/bohara.png" name="Dr. Devi Bohara" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
            </div>
            <h2 style={{marginTop:"40px",marginBottom:"20px"}}>Senior Doctor&apos;s Team</h2>
            <div className="consultants">
                <IndividualConsultants src="/Image/ruit.png" name="Dr.Sanduk Ruit" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
                <IndividualConsultants src="/Image/koirala.png" name="Dr.Bhagwan Koirala" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
                <IndividualConsultants src="/Image/thapa.png" name="Dr.Prabin Bikram Thapa" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
                <IndividualConsultants src="/Image/prabin.png" name="Dr.Prabin Bikram Thapa" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
                <IndividualConsultants src="/Image/bohara.png" name="Dr. Devi Bohara" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
            </div>
      </div>
    )
}