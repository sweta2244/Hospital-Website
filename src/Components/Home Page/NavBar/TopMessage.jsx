import "./TopMessage.css";
import { Link } from "react-router-dom";

export default function TopMessage({ handle }) {
  return (
    <>
      <div className="topMessage">
        <div className="topMessage-left">
          <p>24 Hours Emergency & Ambulance Service:+977-9632025689</p>
        </div>
        <div className="topMessage-right">
          <List1
            name="Appointment"
            img="Image/Appointment.png"
            handleEvent={handle}
          />
          <List1 name="Online Ticketing" img="Image/onlineTicketing.png"/>
          <Link to="/Map"><List1 name="View on Map" img="Image/Viewonmap.png"/></Link>
        </div>
      </div>
    </>
  );
}


function List1({ name, img, handleEvent }) {
  return (
    <div className="individual-button">
      <button onClick={handleEvent} className="topMessage-right-element">
        <img src={img} alt="img" />
        <span>{name}</span>
      </button>
    </div>
  );
}
