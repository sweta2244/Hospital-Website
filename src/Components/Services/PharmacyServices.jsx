import "./PharmacyServices.css"
import Top1 from "../About Us/Top1.jsx";
export default function PharmacyServices() {
  return (
    <div>
      <Top1 t1="Services" m1="Home" m2="Services"/>
      <Content/>
    </div>
  )
}
 function Content(){
  return <div className="content">
    <p style={{marginBottom:"10px",color:"#097FD3"}}>Services</p>
    <h1>Clinical Services</h1>
    <h2>Overview</h2>
    <p>As a multi speciality tertiary care hospital, SCH Hospital is proud of the clinical services that the hospital provides. Following are the key highlights-</p>
    <h2>OPD Service</h2>
    <p>With more than 85 full time and part time consultant doctors, we provide OPD services from 7am to 7pm. For your ease, you can book appointments online from the <u>link</u> or call us at 01-4377404.</p>
    <h2>IDP Service</h2>
    <p>As a 100 bed multispecialty hospital, we cater needs of inpatient services over all specialties. Our inpatient ward consists of general ward, shared cabins, private cabins and a modern VIP suite equipped with all the amenities required to make your hospital stay comfortable and efficient.</p>
    <h2>Intensive Care Unit(ICU)</h2>
    <p>HAMS ICU is equipped with state of the art technology to support patient care for critically ill patients. Patients who are admitted to ICU are specially cared for by Intensivists, trained critical care nurses, and other team members of the ICU. The important part of patient care in ICU is multi- disciplinary consultations that are facilitated by our ICU team. Patient safety and infection prevention & control is equally important and is taken care of by our quality control officer and infection prevention & control team. To know more about our HAMS ICU please click on the following<u>link</u>.</p>
    <h2>Neonatal Intensive Care Unit(NICU)</h2>
    <p>Our Advanced Neonatal Intensive Care Units (NICU) provide Specialist care for Premature and Critically Ill Children. Neonatal Intensive Care Units (NICU) at HAMS Hospital are managed by a highly trained team of Pediatricians, nurses and other medical professionals to provide specialized and advanced care to premature and unwell new-borns. The Neonatal Intensive Care Units (NICU) are designed to provide maximum safety, comfort, and medical care to the infants The NICU is used in cases such as -</p>
    <ul>
      <li>Premature birth</li>
      <li>Extremely low birth weight</li>
      <li>Major birth defects</li>
      <li>Neonatal jaundice</li>
      <li>Infant respiratory distress syndrome</li>
    </ul>
  </div>
 }




