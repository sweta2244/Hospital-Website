import "../Home Page/Body/OurChief.css";
import IndividualConsultants from "../Home Page/Body/IndividualConsultants";
import Top1 from "../About Us/Top1"
export default function Doctors() {
  return (
    <div>
        <Top1 t1="Doctors" m1="Home" m2="Doctors"/>
        <div className="doctors-main" style={{margin:"30px"}}>
            <div>
                <p style={{marginBottom:"10px",color:"#097FD3"}}>Doctors</p>
                <h1 style={{marginBottom:"10px", color:"#143450"}}>Our Chief Consultants</h1>
            </div>
            <div className="consultants">
                <IndividualConsultants src="/Image/ruit.png" name="Dr.Sanduk Ruit" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
                <IndividualConsultants src="/Image/koirala.png" name="Dr.Bhagwan Koirala" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
                <IndividualConsultants src="/Image/thapa.png" name="Dr.Prabin Bikram Thapa" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
                <IndividualConsultants src="/Image/prabin.png" name="Dr.Prabin Bikram Thapa" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
                <IndividualConsultants src="/Image/bohara.png" name="Dr. Devi Bohara" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
                <IndividualConsultants src="/Image/ruit.png" name="Dr.Sanduk Ruit" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
                <IndividualConsultants src="/Image/koirala.png" name="Dr.Bhagwan Koirala" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
                <IndividualConsultants src="/Image/thapa.png" name="Dr.Prabin Bikram Thapa" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
                <IndividualConsultants src="/Image/prabin.png" name="Dr.Prabin Bikram Thapa" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
                <IndividualConsultants src="/Image/bohara.png" name="Dr. Devi Bohara" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
            </div>
        </div>
    </div>
  )
}
