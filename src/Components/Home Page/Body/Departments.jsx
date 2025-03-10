import "./Departments.css"
export default function Departments(){
    const src="/Image/icon3.png";
    return <div className="departments">
        <div className="departments-main">
            <h1>Departments</h1>
            <p>The history of hospital service in Nepal starts in the year 1889 with the establishment of Bir Hospital, the oldest hospital now providing general care to tertiary care to the people of Nepal. Bir hospital is the first teaching hospital for compounders, dresser and later nurses. </p>
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

function Images({src,dname}){
    return<div className="department-box">
        <div className="icon-box">
            <img src={src} alt="department-icon"/>
        </div>
        <p>{dname}</p>
    </div>
}