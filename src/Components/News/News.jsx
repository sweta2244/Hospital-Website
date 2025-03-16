import "./News.css";
export default function News(){
    return <div className="news">
        <h1>News & Events</h1>
        <div className="news-flex">
            <Image2 src="/Image/news1.png" intro="Handover of Medical ICU beds and accessories supported to Emergency"/>
            <Image2 src="/Image/news2.png" intro="Handover of Medical ICU beds and accessories supported to Emergency"/>
            <Image2 src="/Image/news1.png" intro="Handover of Medical ICU beds and accessories supported to Emergency"/>
        </div>
    </div>
}

function Image2({src,intro}){
    return <div className="news-individual">
        <img src={src} alt="news-image"/>
        <button>Hospital Patients Recover</button>
        <p>{intro}</p>
    </div>
}