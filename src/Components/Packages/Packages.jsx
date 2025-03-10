import Top1 from "../About Us/Top1.jsx";
import "./Packages.css";
import Logo2 from "/Image/package-icon.svg";

export default function Packages() {
  return (
    <div className="main-tt">
        <Top1 t1="Packages" m1="Home" m2="Packages"/>
        <HealthPackage/>
    </div>
  )
}

function HealthPackage(){
    return(
        <div style={{ margin: "30px" }}>
            <p style={{ marginBottom: "10px", color: "#097FD3" }}>Packages</p>
            <h1 style={{ marginBottom: "20px", color: "#143450" }}>
            Health Packages
            </h1>
            <div className="flex-1-health">
                {[1,2,3,4,5,6,7,8,9].map((i)=>(<div className="x-health" key={i}>
                    <div className="flex-img">
                        <div className="img-box"><img src={Logo2} alt="icon"/></div>
                        <h4>Standard Packages</h4>
                    </div>
                    <p className="grey-color">CBC, Chest X-ray, Creatinine Serum, ECG, Glucose, Fasting Lipid Profile, SGOT, SGPT, TSH, Uric acid, Urine routine USG, Breakfast, Dental check up and Physician Consultation.</p>
                    <button className="health-button">View Details</button>
                </div>))}
            </div>
    </div>)
}