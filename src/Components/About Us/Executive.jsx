import Top1 from "./Top1";

export default function Executive() {
  return (
    <div>
        <Top1 t1="About Us" m1="About Us" m2="Executive Comittee" />
        
    </div>
  )
}

function MainPart(){
    return(
        <div style={{ marginLeft: "30px" }}>
      <p style={{ color: "#097FD3", marginBottom: "10px", marginTop: "10px" }}>
        About Us
      </p>
      <h2 style={{ marginBottom: "40px" }}>SCH Hospital Overview</h2>
      </div>
    )
}