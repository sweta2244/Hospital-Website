import Top1 from "../About Us/Top1.jsx";
import "./Schedules.css";
export default function Schedules() {
  return (
    <div>
        <Top1 t1="Schedules" m1="Home" m2="Our Schedules" />
        <ScheduleContent/>
    </div>
  )
}

function ScheduleContent(){
    const headings=["S.No.","Department/Units","Room No./OPD floor","Doctors","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    return (
        <div style={{ margin: "30px" }}>
            <p style={{ marginBottom: "10px", color: "#097FD3" }}>Our Schedules</p>
            <h1 style={{ marginBottom: "10px", color: "#143450" }}>
            Schedules
            </h1>
            <table className="table-schedule">
                <tr>
                    {headings.map((heading,index)=><th key={index}>{heading}</th>)}
                </tr>
                <tr>
                    <td>01</td>
                    <td>Orthopedic</td>
                    <td>112/st floor</td>
                    <td>Kim Aryal</td>
                    <td>Morning</td>
                    <td>-</td>
                    <td>Evening</td>
                    <td>Morning</td>
                    <td>Evening & Aftornoon</td>
                    <td>Evening & Aftornoon</td>
                    <td>Morning</td>
                </tr>
            </table>
        </div>
    )
}