import { useState } from "react";
import Top1 from "../About Us/Top1";
import "./ImageGallery.css";

export default function ImageGallery() {
    const imageGallery=[
        {
            tag:"All",
            images:["/Image/OPD2.svg","/Image/emergency1.svg","/Image/emergency2.svg","/Image/ward1.svg","/Image/ward2.svg","/Image/welcome1.svg","/Image/welcome2.svg","/Image/patients1.svg","/Image/patients2.svg"]
        },
        {
            tag:"OPD",
            images:["/Image/OPD2.svg"]
        },
        {
            tag:"Emergency",
            images:["/Image/emergency1.svg","/Image/emergency2.svg"]
        },
        {
            tag:"Ward",
            images:["/Image/ward1.svg","/Image/ward2.svg"]
        },
        {
            tag:"Welcome Programs",
            images:["/Image/welcome1.svg","/Image/welcome2.svg"]
        },
        {
            tag:"Patients",
            images:["/Image/patients1.svg","/Image/patients2.svg"]
        }
    ]
    const [image,setImage]=useState(imageGallery[0]);
    function handleImage(index){
        setImage(imageGallery[index]);
    }

  return (
    <div className="image-gallery">
        <Top1 t1="Media" m1="Home" m2="Image Gallery"/>
        <div style={{ margin: "30px" }}>
            <p style={{ marginBottom: "10px", color: "#097FD3" }}>Media</p>
            <h1 style={{ marginBottom: "10px", color: "#143450" }}>
                Image Gallery
            </h1>
            <div style={{display:"flex",gap:"10px",marginBottom:"20px"}} className="gallery-btn">
                {imageGallery.map((i,index)=><button key={index} onClick={()=>handleImage(index)} style={{backgroundColor:"#DCE3F6",padding:"5px",borderRadius:"5px",border:"1px solid #0000001A",color:"#234CBB"}}>{i.tag}</button>)}
            </div>
            <div className="gallery-image">
                {image.images.map((i,j)=><img key={j} src={i} alt="image"/>)}
            </div>
        </div>
    </div>
  )
}
