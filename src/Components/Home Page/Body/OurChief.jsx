import "./OurChief.css";
import IndividualConsultants from "./IndividualConsultants.jsx";
export default function OurChief(){
    return <div className="consultants-main">
        <h1>Our Cheif Consultants</h1><br/>
        <p>We are providing high-quality online courses to improve your skill. Our all instructors are highly experience experts. We are providing high-quality online courses to
        improve your skill. We are providing high-quality online courses to improve your skill. Our all instructors are highly experienced and experts. We are providing high-quality online </p><br/>
        <div className="consultants">
            <IndividualConsultants src="/Image/ruit.png" name="Dr.Sanduk Ruit" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
            <IndividualConsultants src="/Image/koirala.png" name="Dr.Bhagwan Koirala" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
            <IndividualConsultants src="/Image/thapa.png" name="Dr.Prabin Bikram Thapa" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
            <IndividualConsultants src="/Image/prabin.png" name="Dr.Prabin Bikram Thapa" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
            <IndividualConsultants src="/Image/bohara.png" name="Dr. Devi Bohara" post="Pediatric Surgery (MBBS, MS)" position="Chief Consultant, Head of General (GI)"/>
        </div>
    </div>
}
