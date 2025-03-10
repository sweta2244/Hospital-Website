import { TbTargetArrow } from "react-icons/tb";
import Top1 from './Top1'
import { BiLowVision } from "react-icons/bi";

export default function MissionVision() {
  return (
    <div>
        <Top1 t1="About Us" m1="About Us" m2="Mission & Vision" />
        <MissionContent/>
    </div>
  )
}

function MissionContent(){
    return(
        <div style={{ marginLeft: "30px" }}>
            <p style={{ color: "#097FD3", marginBottom: "10px", marginTop: "10px" }}>
                About Us
            </p>
            <h2 style={{ marginBottom: "40px" }}>Mission & Vision</h2>
            <div style={{display:"flex",gap:"10px",marginBottom:"20px"}}>
                <div style={{boxShadow:"1px 1px 2px 2px #00000017",padding:"10px"}}>
                    <h3><BiLowVision/> Vision</h3>
                    <p style={{padding:"10px",marginTop:"10px"}}>To enhance and protect our market leader position of being the biggest and most trusted automotive distributor along with its allied ventures here in Nepal.</p>
                </div>
                <img src="/Image/binocular.svg" alt="img"/>
            </div>
            <div style={{display:"flex",gap:"90px",marginBottom:"20px"}}>
                <img src="/Image/target.svg" alt="img"/>
                <div style={{boxShadow:"1px 1px 2px 2px #00000017",padding:"10px"}}>
                    <h3><TbTargetArrow/> Mission</h3>
                    <ul style={{padding:"10px",marginTop:"10px"}}>
                        <li>Customer&apos;s first choice across all segments</li>
                        <li>Employee&apos;s first choice</li>
                        <li>Excellence in supply chain management, safety, operating efficiencies, stake holder management and CSR activities</li>
                        <li>Growth oriented strategies and investments</li>
                    </ul>
                </div>
            </div>
    </div>);
}