import { useState } from "react";

import "./Appointment.css";
export default function Appointment({ showAppointment, handle }) {
  const [page, setPage] = useState(1);
  const [depart, setDepart] = useState("");
  const [doctor, setDoctor] = useState("");
  const [message, setMessage] = useState(true);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    age: "",
    date: "",
    email: "",
  });
  function handleNextButton(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  
  function handlePage(page) {
    setPage(page);
  }
  
  function handleMessage(){
    setMessage(!message);
  }
  
  function handleProcess(page) {
    const input=!(!doctor) && !(!depart);
    if (input){
      handlePage(page);
      handleMessage();
    }
    else{
      handleMessage();
    }
  }
  function handleProcess1(page) {
    const isFormComplete =
      data.firstname &&
      data.lastname &&
      data.gender &&
      data.age &&
      data.date &&
      data.email;
    if (isFormComplete){
      handlePage(page);
    }
    else{
      handleMessage();
    }
  }

  if (!showAppointment) return;
  return (
    <div
      style={{
        position: "fixed",
        inset: "0",
        background: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="white-background">
        <p
          onClick={handle}
          style={{
            backgroundColor: "green",
            color: "white",
            textAlign: "center",
            width: "5%",
            aspectRatio: "1/1",
            alignContent: "center",
            borderRadius: "20px",
            float: "right",
            transform: "translate(0,-30px)",
            cursor: "default",
          }}
        >
          &times;
        </p>

        <h2 style={{ textAlign: "center" }}>Book An Appointment</h2>
        <ul className="checked-stage-number">
          <li style={page === 1 ? { color: "#00A0AA" } : { color: "#9B9B9B" }}>
            <p className="num">1</p>
            <p className="num-p">Doctor Information</p>
          </li>
          <li style={page === 2 ? { color: "#00A0AA" } : { color: "#9B9B9B" }}>
            <p className="num">2</p>
            <p className="num-p">Patient Information</p>
          </li>
          <li style={page === 3 ? { color: "#00A0AA" } : { color: "#9B9B9B" }}>
            <p className="num">3</p>
            <p className="num-p">Schedule</p>
          </li>
        </ul>
        {page == 1 && (
          <Step1
            depart={depart}
            doctor={doctor}
            setDepart={setDepart}
            setDoctor={setDoctor}
            handleProcess={handleProcess}
            message={message}
          />
        )}
        {page == 2 && (
          <div>
            <Step2 page={page} handlePage={handlePage} handleProcess1={handleProcess1} data={data} handleNextButton={handleNextButton} message={message} />
          </div>
        )}
        {page == 3 && <Step3 page={page} handlePage={handlePage} handleProcess={handleProcess} message={message}/>}
      </div>
    </div>
  );
}

function Step1({
  depart,
  doctor,
  setDepart,
  setDoctor,
  handleProcess,
  message
}) {
  const dropdown_values = [
    { department: "DENTAL", doctor: "Dr. Mukund Pradas" },
    { department: "DRMATOLOGIST", doctor: "Dr. Pashupati" },
    { department: "CARDIOLOGY", doctor: "Dr. Hemant" },
  ];

  return (
    <div className="input-box">
      <h3>Doctor Information</h3>
      <hr />
      <div className="input-box-padding">
        <div>
          <select
            value={depart}
            onChange={(e) => setDepart(e.target.value)}
            required
          >
            <option value="" disabled selected={!depart}>
              Select Department
            </option>
            {dropdown_values.map((dictionary, i) => (
              <option key={i}>{dictionary.department}</option>
            ))}
          </select>
          {!message && !depart && (
            <span style={{ color: "red" }}>Please select a Department</span>
          )}
        </div>

        <div>
          <select
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            required
          >
            <option value="" disabled selected={!doctor}>
              Select a Doctor
            </option>
            {dropdown_values
              .filter((dictionary) => dictionary.department === depart)
              .map((dictionary, i) => (
                <option key={i}>{dictionary.doctor}</option>
              ))}
          </select>
          {!message && !doctor &&(
            <span style={{ color: "red" }}>Please select a Doctor</span>
          )}
        </div>

        {
          <button
            style={{ marginTop: "30px", float: "right" }}
            onClick={() => handleProcess(2)}
          >
            Next
          </button>
        }
      </div>
    </div>
  );
}

function Step2({ handlePage, handleProcess1, data, handleNextButton, message }) {
  const {firstname,lastname,gender,age,date,email}=data;
  return (
    <div className="input-box">
      <h3>Patient Information</h3>
      <hr />
      <div className="input-fields">
        <div className="inputbox-flex">
          <div>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={firstname}
              onChange={handleNextButton}
              required
            />
            {!message && !firstname && (
            <span style={{ color: "red" }}>First Name is required</span>
          )}

            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={lastname}
              onChange={handleNextButton}
              required
            />
            {!message && !lastname && (
              <span style={{ color: "red" }}>Last Name is required</span>
            )}

            <select
              style={{ width: "93%" }}
              name="gender"
              value={gender}
              onChange={handleNextButton}
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
            {!message && !gender && (
              <span style={{ color: "red" }}>Gender is required</span>
            )}
          </div>
          <div>
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={age}
              onChange={handleNextButton}
              required
            />
            {!message && !age && (
              <span style={{ color: "red" }}>Age is required</span>
            )}

            <input
              type="date"
              name="date"
              placeholder="mm/dd/yy"
              value={date}
              onChange={handleNextButton}
              required
            />
            {!message && !date && (
              <span style={{ color: "red" }}>Date is required</span>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleNextButton}
              required
            />
            {!message && !email && (
              <span style={{ color: "red"}}>Email is required</span>
            )}

          </div>
        </div>
        {
          <button
            style={{ marginTop: "30px", float: "right" }}
            onClick={() => handleProcess1(3)}
          >
            Next
          </button>
        }
        {
          <button
            style={{ marginTop: "30px", float: "right" }}
            onClick={() => handlePage(1)}
          >
            Prev
          </button>
        }
      </div>
    </div>
  );
}

function Step3({ handlePage, handleProcess }) {
  const [data1, setData1] = useState({ appointmentDate: "", instruction: "" });
  function handleNextButton2(e) {
    setData1({ ...data1, [e.target.name]: e.target.value });
  }
  const isForm2Complete = data1.appointmentDate && data1.instruction;
  return (
    <div className="input-box">
      <h3>Schedule</h3>
      <hr />
      <div className="Any instruction">
        <div className="input-fields-2">
          <input
            type="date"
            name="appointmentDate"
            placeholder="mm/dd/yy"
            value={data1.appointmentDate}
            onChange={handleNextButton2}
            required
          />
          <textarea
            name="instruction"
            rows={4}
            value={data1.instruction}
            onChange={handleNextButton2}
            placeholder="Any instruction"
            required
          ></textarea>
        </div>
        {
          <button
            style={{ marginTop: "30px", float: "right" }}
            onClick={() => handleProcess(3)}
            disabled={!isForm2Complete}
          >
            Submit
          </button>
        }
        {
          <button
            style={{ marginTop: "30px", float: "right" }}
            onClick={() => handlePage(2)}
          >
            Prev
          </button>
        }
      </div>
    </div>
  );
}
