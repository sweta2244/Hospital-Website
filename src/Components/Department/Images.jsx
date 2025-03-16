export default function Images({src,dname}){
    return<div className="department-box">
        <div className="icon-box">
            <img src={src} alt="department-icon"/>
        </div>
        <p>{dname}</p>
    </div>
}