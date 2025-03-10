import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <div className="yellow-box"></div>
        <img
          src="Image/doctor2.png"
          alt="doctor2"
          style={{
            position: "absolute",
            zIndex: "11",
            width: "75%",
            height:"500px",
            marginTop: "20px",
            left: "50%",
            bottom: "0",
            transform: "translate(-50%)",
          }}
        />
      </div>
      <div className="header-right">
        <p style={{ color: "#00A0AA", lineHeight: "30px", fontSize: "20px" }}>
          Welcome to South City Himal Hospital
        </p>
        <h1
          style={{
            color: "#143450",
            lineHeight: "54.56px",
            fontSize: "40px",
            padding: "18px 0",
          }}
        >
          Your Journey
          <br />
          to Better Health Starts Here
        </h1>
        <p
          style={{
            lineHeight: "24.55px",
            fontSize: "18px",
            paddingBottom: "40px",
          }}
        >
          The history of hospital service in Nepal starts in the year 1889 with
          the establishment of Bir Hospital, the oldest hospital now providing
          general care to tertiary care to the people of Nepal. Bir hospital is
          the first teaching hospital for compounders, dresser and later nurses.
          For the same reason the first medical school called Civil Medical
          School was established in 1933 AD in Bir Hospital. It was also the
          centre for the training of FRCS, MRCP and MRCOG since 1987. Therefore
          Bir Hospital has been a postgraduate Training centre from the
          beginning. In 1979 super-specialization medical services was expanded
          in this hospital.
        </p>
        <button
          style={{
            backgroundColor: " #00A0AA",
            borderRadius: "8px",
            padding: "15px",
            borderStyle: "none",
            color: "white",
            fontSize: "20px",
          }}
        >
          Discover More
        </button>
      </div>
    </div>
  );
}
