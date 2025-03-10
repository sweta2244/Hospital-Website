import "./Capacity.css";
export default function Capacity() {
  return (
    <div className="Capacity">
      <div className="Capacity-back"></div>

      <div style={{ position: "relative", zIndex: "111" }}>
        <h1>Our Capacity</h1>
        <div className="Capacity-icon">
          {Array.from({length:10},(index)=>index).map((i)=><CIcon key={i}/>)}
        </div>
      </div>
    </div>
  );
}
function CIcon() {
  return (
    <div className="Capacity-individual">
      <img src="/Image/hospital-icon.png" alt="icon" />
      <p>25</p>
      <p>Emergency</p>
    </div>
  );
}
