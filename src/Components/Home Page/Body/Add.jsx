import "./Add.css"
export default function Add({handle}){
    return <div className="relative">
        <img src="Image/background2.png" alt="background2"/>
        <div className="absolute">
            <div style={{display:"flex",alignItems:"center"}}>
                <div style={{paddingTop:"50px",fontSize:"15px",padding:"10px",textAlign:"center"}} className="message">
                    <h1>Schedule an imperson or virtual appointment today</h1>
                    <div className="button-flex">
                        <button
                            style={{
                            backgroundColor: " #00A0AA",
                            borderRadius: "29px",
                            padding: "16px",
                            borderStyle: "none",
                            color:"white",
                            fontSize:"20px",
                            marginTop:"10px",
                            }}
                            onClick={handle}
                        >
                            Book An Appointment
                        </button>
                    </div>
                </div>
            </div>
            <div className="image" >
                <img src="./Image/doctor6.png" alt="doctor2" style={{height:"26rem"}}/>
            </div>
        </div>
    </div>
}