export default function Top1({t1,m1,m2}) {
  return (
    <div style={{backgroundImage:"url('/Image/overview-background.png')",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat", height:"300px",alignContent:"center"}}>
        <div style={{textAlign:"center",color:"#143450"}}>
            <h1>{t1}</h1>
            <p>{m1} || {m2}</p>
        </div>
    </div>
  )
}
