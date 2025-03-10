import "./Contact.css";
export default function Contact(){
    return <div className="contact">
        <div>
            <div className="contact-logo">
                <div><img src="/Image/insidelogo.png" alt="last-logo"/></div>
            </div>
            <img src="/Image/stethoscope.png" alt="img" style={{position:"absolute",top:"10%",right:"3%",width:"15%"}}/>
            <div className="contact-flex">
                <div className="contact-individual">
                    <p>Quick Links</p>
                    <ul>
                        <li>Department</li>
                        <li>Doctors</li>
                        <li>Services</li>
                        <li>News</li>
                    </ul>
                </div>
                <div className="contact-depart">
                    <p style={{textAlign:"center"}}>Our Departments</p>
                        <div className="contact-department">
                            <ul>
                                <li>Anesthesiology</li>
                                <li>Cardiology</li>
                                <li>Cardiovascular Surgery</li>
                                <li>ENT</li>
                                <li>Gastro-Enterologyst</li>
                            </ul>
                            <ul className="hidden-in-640">
                                <li>Gynaecology</li>
                                <li>Hepatology</li>
                                <li>Neurology</li>
                                <li>Neurosurgery</li>
                                <li>Pathology</li>
                            </ul>
                        </div>
                </div>
                <div className="quick">
                    <p>Quick links</p>
                    <ul>
                        <li>Department</li>
                        <li>Doctors</li>
                        <li>Services</li>
                        <li>News</li>
                    </ul>
                </div>
                <div>
                    <p>Contact Us</p>
                    <ul className="white-icon">
                        <li><img src="/Image/i1.png" alt="i1"/> <p>+977-9802593288</p></li>
                        <li><img src="/Image/i2.png" alt="i2"/> <p>Birjung,Nepal</p></li>
                        <li><img src="/Image/i3.png" alt="i3"/> <p>southcityhimalhospital@gmail.com</p></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p style={{textAlign:"center",padding:"10px"}}>Copyright &copy; Dynamic Technosoft Pvt. Ltd. || 2019-2022</p>
                </div>
        </div>
}