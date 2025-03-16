import Top1 from "../About Us/Top1";
import "./SubCareer.css";
export default function SubCareer() {
  return (
    <div>
        <Top1 t1="Career" m1="Home" m2="Career"/>
        <div style={{ margin: "30px" }}>
          <p style={{ marginBottom: "10px", color: "#097FD3" }}>Career</p>
          <h1 style={{ marginBottom: "10px", color: "#143450" }}>
            Our Latest Vacency
          </h1>
          <p style={{ color: "#6D6E70" }}>
            We&apos;re looking for passionate and skilled professionals to join our
            team and provide exceptional healthcare services to our patients.
          </p>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:"50px"}}>
            <div style={{width:"30%",color:"rgb(104, 104, 104)"}}>
                <h2>Join Our Talent Pool</h2>
                <p>No open positions at the moment. Feel free to send your resume stating your area of interest to our Human Resource Department to be listed in our talent pool.</p>
            </div>
            <div style={{border:"2px solid #c6c6c6",width:"60%",padding:"30px 20px",borderRadius:"10px"}}>
                <form className="form-cv">
                    <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"20px"}}>
                        <input type="text" name="firstname" placeholder="First Name*"/>
                        <input type="text" name="lastname" placeholder="Last Name*"/>
                        <input type="email" name="email" placeholder="Email Id*"/>
                        <input type="tel" name="contactnumber" placeholder="Contact No*"/>
                        <input type="text" name="address" placeholder="Address"/>
                        <select>
                            <option disabled>Select Qualification*</option>
                            <option selected>Masters</option>
                            <option>Bachelor</option>
                            <option>Intermediate</option>
                            <option>SLC</option>
                            <option>others</option>
                        </select>
                        <input type="file" accept=".pdf,.doc"/>
                        <p style={{borderStyle:"none"}}>We accept PDF, DOC files</p>
                    </div>
                    <textarea name="message" placeholder="Message" rows={6} style={{width:"97%",marginTop:"30px"}}/>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"20px"}}>
                        <input type="submit" value="Submit" style={{backgroundColor:"#234cbb",color:"white",border: "1px solid #c6c6c6",padding:"10px 30px"}}/>
                        <input type="reset" value="Reset" style={{background:"#c2eaed",color:"#00a0aa",border: "1px solid #c6c6c6",padding:"10px 30px"}}/>
                    </div>
                </form>
            </div>
          </div>
        </div>
    </div>
  )
}
