import "./Say.css"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
export default function Say(){
    return <div className="say">
        <div>
            <p style={{fontSize:"18px"}}>Testimonial</p>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"20px"}}>
                <div>
                    <h2 style={{fontSize:"40px"}}>What They say about Us</h2>
                </div>
                <div className="say-button" style={{alignContent:"center"}}>
                    <button style={{color:"blue"}}><FaArrowLeft size={25}/></button>
                    <button style={{color:"blue"}}><FaArrowRight size={25}/></button>
                </div>
            </div>
        </div>
        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"center"}}>
            <div className="say-box">
                <img src="/Image/up.png" alt="up" style={{marginBottom:"10px"}}/>
                <p style={{fontSize:"18px",marginBottom:"20px"}}>South City Himal Hospital is a multi-disciplinary tertiary care hospital situated in Kathmandu. With over 25 years of experience and expertise, we have been providing quality and affordable healthcare to the community. </p>
                <div style={{display:"flex", justifyContent:"space-between"}} className="outer-flex">
                    <div style={{display:"flex", justifyContent:"space-between",gap:"20px"}} className="inner-flex">
                        <div>
                            <img src="/Image/doctor5.png" alt="doctor5"/>
                        </div>
                        <div style={{alignContent:"center"}}>
                            <p style={{fontSize:"25px"}}>Dr.Bhagwan Koirala</p>
                            <p style={{fontSize:"16px"}}>Senior Cardiothoracic surgeon</p>
                        </div>
                    </div>
                    <div className="downz"><img src="/Image/down.png" alt="down" style={{width:"74px",height:"61px",transform:"translate(0,150%)"}}/></div>
                </div>
            </div>
        </div>
    </div>
}