import "./Departments.css"
import Images from "../../Department/Images"
export default function Departments(){
    const src="/Image/icon3.png";
    return <div className="departments">
        <div className="departments-main">
            <h1 style={{color:"white"}}>Departments</h1>
            <p style={{color:"white",paddingTop:"10px"}}>The history of hospital service in Nepal starts in the year 1889 with the establishment of Bir Hospital, the oldest hospital now providing general care to tertiary care to the people of Nepal. Bir hospital is the first teaching hospital for compounders, dresser and later nurses. </p>
            <div className="departments-flex">
                <Images src={src} dname="Emergency Department"/>
                <Images src={src} dname="Emergency Department"/>
                <Images src={src} dname="Cardiology Department"/>
                <Images src={src} dname="Emergency Department"/>
                <Images src={src} dname="Emergency Department"/>
            </div>
        </div>
    </div>
}

