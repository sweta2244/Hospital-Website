export default function IndividualConsultants({ src,name,post,position }){
    return <div className="individual-consultants">
        <div className="consultant-image">
            <img src={src} alt="consultants"/>
        </div>
        <h3>{name}</h3>
        <p>{post}</p>
        <p>{position}</p>
    </div>
}