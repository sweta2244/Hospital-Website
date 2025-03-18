import Top1 from "../About Us/Top1";
import { HiArrowLongRight } from "react-icons/hi2";
import "./Blogs.css";
import {Link} from "react-router-dom";
export default function Blogs() {
  const individualBlog = [
    {
      img: "/Image/blog1.svg",
      description:
        "A healthy heart is the cornerstone of a healthy life, impacting every aspect of our",
      link:"/Media/Blogs/1"
    },
    {
      img: "/Image/blog2.svg",
      description:
        "Labor Day at SCH Hospital is a time of reflection, appreciation, & celebration of",
        link:"/Media/Blogs/2"
    },
    {
      img: "/Image/blog3.svg",
      description:
        "Nursing Day at SCH Hospital is not just a celebration; it's a tribute to the dedicated",
        link:"/Media/Blogs/3"
    },
    {
      img: "/Image/blog4.svg",
      description:
        "The liver plays a crucial role in our body's overall function, from detoxification to ",
        link:"/Media/Blogs/4"
    },
    {
      img: "/Image/blog5.svg",
      description:
        "Mother's Day is a special occasion to honor and celebrate the invaluable",
        link:"/Media/Blogs/5"
    },
    {
      img: "/Image/blog1.svg",
      description:
        "A healthy heart is the cornerstone of a healthy life, impacting every aspect of our",
        link:"/Media/Blogs/6"
    },
  ];
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
