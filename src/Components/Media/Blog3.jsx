import { HiArrowLongRight } from "react-icons/hi2";
import Top1 from "../About Us/Top1";
import "./Blogs.jsx";
import {Link} from "react-router-dom";
import { individualBlog } from "./IndividualBlog";

export default function Blog3() {
  return (
    <div>
      <div style={{ position: "relative",zIndex:"-1"}}>
        <Top1 t1="Media" m1="Home" m2="Blogs" />
        <div
          style={{
            overflow: "hidden",
            height: "400px",
            position: "absolute",
            top: "100px",
            left: "5%",
            width: "90%"
          }}
        >
          <img
            src="/Image/blog3.svg"
            alt="image"
            style={{ width: "100%", height: "100%", objectFit: "cover"}}
          />
        </div>
        <div style={{marginTop:"250px",display:"flex",justifyContent:"center"}}>
          <div style={{width:"90%",textAlign:"justify"}}>
            <h1 style={{marginBottom:"20px"}}>
              Nursing Day at SCH Hospital is not just a celebration; it&apos;s a
              tribute to the dedicated nurses who are the heartbeat of our
              healthcare system.
            </h1>
            <p style={{marginBottom:"20px"}}>
              At SCH Hospital, nursing is more than a profession; it&apos;s a
              calling to serve and make a difference in people&apos;s lives. Our
              nurses embody the values of empathy, professionalism, and
              excellence, ensuring that every patient receives the highest quality
              of care and support. Nursing Day at SCH Hospital is not just a
              celebration; it&apos;s a tribute to the dedicated nurses ho are the
              heartbeat of our healthcare system. This special day recognizes
              their invaluable contributions, compassion, and unwavering
              commitment to patient care. SCH Hospital actively engages with the
              community on Nursing Day, raising awareness about the vital role of
              nurses in healthcare and promoting health education initiatives. We
              believe in empowering individuals to take charge of their health and
              well-being. As we celebrate Nursing Day at SCH Hospital, we extend
              our heartfelt gratitude to our nurses for their tireless efforts,
              dedication, and compassion. They are the backbone of our healthcare
              system, embodying the spirit of care, healing, and hope every day.
              Our nurses are advocates for patient-centered care, ensuring that
              each patient&apos;s unique needs, preferences, and concerns are
              addressed with compassion and respect. Nursing Day reinforces our
              commitment to delivering holistic and personalized care to every
              individual we serve. Nursing Day fosters a sense of camaraderie,
              teamwork, and unity among our nursing staff. It&apos;s a time for
              collaboration, sharing experiences, and supporting each other in
              delivering exceptional care to our patients and their families. SCH
              Hospital actively engages with the community on Nursing Day, raising
              awareness about the vital role of nurses in healthcare and promoting
              health education initiatives. We believe in empowering individuals
              to take charge of their health and well-being.
            </p>
            <h2 style={{marginBottom:"10px"}}>Acknowledging Excellence</h2>
            <p style={{marginBottom:"20px"}}>
              Nursing Day is an opportunity to acknowledge and appreciate the hard
              work, dedication, and excellence of our nursing staff. From
              providing compassionate bedside care to implementing critical
              medical interventions, our nurses play a pivotal role in the
              well-being of our patients.
            </p>
            <h2 style={{marginBottom:"10px"}}>Patient-Centered Care</h2>
            <p style={{marginBottom:"20px"}}>
              Our nurses are advocates for patient-centered care, ensuring that
              each patient&apos;s unique needs, preferences, and concerns are
              addressed with compassion and respect. Nursing Day reinforces our
              commitment to delivering holistic and personalized care to every
              individual we serve. Nursing Day fosters a sense of camaraderie,
              teamwork, and unity among our nursing staff. It&apos;s a time for
              collaboration, sharing experiences, and supporting each other in
              delivering exceptional care to our patients and their families. SCH
              Hospital actively engages with the community on Nursing Day, raising
              awareness about the vital role of nurses in healthcare and promoting
              health education initiatives. We believe in empowering individuals
              to take charge of their health and well-being.
            </p>
            <h2 style={{marginBottom:"10px"}}>Community Engagement</h2>
            <p style={{marginBottom:"20px"}}>
              SCH Hospital actively engages with the community on Nursing Day,
              raising awareness about the vital role of nurses in healthcare and
              promoting health education initiatives. We believe in empowering
              individuals to take charge of their health and well-being. As we
              celebrate Nursing Day at SCH Hospital, we extend our heartfelt
              gratitude to our nurses for their tireless efforts, dedication, and
              compassion. They are the backbone of our healthcare system,
              embodying the spirit of care, healing, and hope every day. Our
              nurses are advocates for patient-centered care, ensuring that each
              patient&apos;s unique needs, preferences, and concerns are addressed with
              compassion and respect. Nursing Day reinforces our commitment to
              delivering holistic and personalized care to every individual we
              serve. Nursing Day fosters a sense of camaraderie, teamwork, and
              unity among our nursing staff. It&apos;s a time for collaboration,
              sharing experiences, and supporting each other in delivering
              exceptional care to our patients and their families. SCH Hospital
              actively engages with the community on Nursing Day, raising
              awareness about the vital role of nurses in healthcare and promoting
              health education initiatives. We believe in empowering individuals
              to take charge of their health and well-being.
            </p>
            <h2 style={{marginBottom:"20px"}}>Related Post</h2>
            <div className="blog-grid">
              {individualBlog.filter((i)=>i.id!==2).map((i, index) => (
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
      </div>
    </div>
  );
}
