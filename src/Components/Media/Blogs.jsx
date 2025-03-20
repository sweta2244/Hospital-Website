import Top1 from "../About Us/Top1";
import { HiArrowLongRight } from "react-icons/hi2";
import "./Blogs.css";
import {Link} from "react-router-dom";
import { individualBlog } from "./IndividualBlog";

export default function Blogs() {
  return (
    <div className="image-gallery">
      <Top1 t1="Media" m1="Home" m2="Image Gallery" />
      <div style={{ margin: "30px" }}>
        <p style={{ marginBottom: "10px", color: "#097FD3" }}>Media</p>
        <h1 style={{ marginBottom: "10px", color: "#143450" }}>Blogs</h1>
        <div className="blog-grid">
          {individualBlog.map((i, index) => (
            <Link key={index} className="individual-blog" to={i.link}>
                <div>
                    <img src={i.img} alt="image"/>
                    <p>{i.description}</p>
                    <div style={{display:"flex",alignItems:"center",color:"blue"}}>
                        <p>Learn More</p>
                        <HiArrowLongRight />
                    </div>
                </div>
                <div style={{position:"absolute",backgroundColor:"#DFE8FE",padding:"5px",borderRadius:"25px",top:"20px",left:"20px"}}>
                    <p>New Year Offer</p>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
