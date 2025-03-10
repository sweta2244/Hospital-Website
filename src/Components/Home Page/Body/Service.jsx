import "./Service.css";
export default function Service() {
  return (
    <div className="service">
      <h1 style={{ textAlign: "center" }}>We Provide Best Health Service</h1>
      <br />

      <div className="service-individual">
        <Individual
          title="Radiology Services"
          img="/Image/1p.png"
          description="At South City Himal Hospital, our team of specialists is equipped to provide the most advanced medical care in a compassionate environment. We treat all kinds of patients from children to senior citizens in our advanced facilities withall."
          bcolor="#DFF7EA"
          color="#0D8343"
        />
        <Individual
          title="OT Services"
          img="/Image/2p.png"
          description="At South City Himal Hospital, our team of specialists is equipped to provide the most advanced medical care in a compassionate environment. We treat all kinds of patients from children to senior citizens in our advanced facilities withall."
          bcolor="#FEE6DC"
          color="#872C06"
        />
        <Individual
          title="Pharmacy Services"
          img="/Image/3p.png"
          description="At South City Himal Hospital, our team of specialists is equipped to provide the most advanced medical care in a compassionate environment. We treat all kinds of patients from children to senior citizens in our advanced facilities withall."
          bcolor="#FEEFC1"
          color="#CEAA28"
        />
        <Individual
          title="Physiotheraphy Services"
          img="/Image/4p.png"
          description="At South City Himal Hospital, our team of specialists is equipped to provide the most advanced medical care in a compassionate environment. We treat all kinds of patients from children to senior citizens in our advanced facilities withall."
          bcolor="#E5DFF7"
          color="#4218BF"
        />
        <Individual
          title="OT Services"
          img="/Image/5p.png"
          description="At South City Himal Hospital, our team of specialists is equipped to provide the most advanced medical care in a compassionate environment. We treat all kinds of patients from children to senior citizens in our advanced facilities withall."
          bcolor="#FFEFD3"
          color="#DB6A03"
        />
        <Individual
          title="Pharmacy Services"
          img="/Image/6p.png"
          description="At South City Himal Hospital, our team of specialists is equipped to provide the most advanced medical care in a compassionate environment. We treat all kinds of patients from children to senior citizens in our advanced facilities withall."
          bcolor="#E6F7FD"
          color="#0180AD"
        />
      </div>
    </div>
  );
}

function Individual({ title, description, img, bcolor, color }) {
  return (
    <div
      style={{ background: bcolor, padding: "20px", paddingBottom:"0px"}}
      className="individual"
    >
      <h1 style={{ color: color, marginBottom: "10px"}}>
        {title}
      </h1>
      <hr style={{marginBottom:"10px"}}/>
      <div style={{position:"relative"}}>
        <img
          src={img}
          alt="alt"
          style={{
            float:"right",
            shapeMargin: "10px",
            shapeOutside: `url('${img}')`
          }}
        />
        <div>
          <p style={{ fontSize: "16px"}}>{description}</p>
        </div>
      </div>
    </div>
  );
}
