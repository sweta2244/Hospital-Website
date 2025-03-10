import Top1 from './Top1.jsx';
import { FaHands } from "react-icons/fa";
export default function CoreValues() {
  return (
    <div>
        <Top1 t1="About Us" m1="About Us" m2="Core Values" />
        <CoreContent/>
    </div>
  )
}

function CoreContent(){
    return <div style={{ marginLeft: "30px" }}>
        <p style={{ color: "#097FD3", marginBottom: "10px", marginTop: "10px" }}>
            About Us
        </p>
        <h2 style={{ marginBottom: "40px" }}>Core Values</h2>
        <div style={{display:"flex",gap:"30px"}}>
            <div style={{boxShadow:"1px 1px 2px 2px #00000017",padding:"10px"}}>
                <h3 style={{marginBottom:"25px",color:"#234CBB"}}><FaHands/> Core Values</h3>
                <div>
                    <table>
                        <tr>
                            <td>Integrity</td>
                            <td>Maintain high ethical standards and compliance in conducting business</td>
                        </tr>
                        <tr>
                            <td>Unity</td>
                            <td>Maintain and improve open communication platform, encourage team work, respect all and recognize excellence in performance</td>
                        </tr>
                        <tr>
                            <td>Innovation</td>
                            <td>Constantly remain creative in satisfying changing customer needs</td>
                        </tr>
                        <tr>
                            <td>Learning</td>
                            <td>Strongly emphasize the need to remain ahead of competition and be current with global standards and benchmarks in training employees</td>
                        </tr>
                        <tr>
                            <td>System</td>
                            <td>Be a system and process driven company that constantly invests in its physical infrastructure, people technology and all procedural systems that drive efficiency and excellence</td>
                        </tr>
                    </table>
                </div>
            </div>
            <img src="/Image/stairs.svg" alt="image"/>
        </div>
    </div>
}