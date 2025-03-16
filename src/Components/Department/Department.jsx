import Top1 from "../About Us/Top1";
import Images from "./Images.jsx"
export default function Department() {
    const src="/Image/icon3.png";
  return (
    <div>
        <Top1 t1="Department" m1="Home" m2="Departments"/>
        <h1>Departments</h1>
        <div className="departments-flex">
            <Images src={src} dname="Emergency Department"/>
            <Images src={src} dname="Emergency Department"/>
            <Images src={src} dname="Cardiology Department"/>
            <Images src={src} dname="Emergency Department"/>
            <Images src={src} dname="Emergency Department"/>
        </div>
    </div>
  )
}
