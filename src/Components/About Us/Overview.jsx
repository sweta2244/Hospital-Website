import Why from "../Home Page/Body/Why";
import "./Overview.css";
import Top1 from "./Top1.jsx";
export default function Overview() {
  return (
    <div>
      <Top1 t1="About Us" m1="About Us" m2="Overview" />
      <Second />
      <Why />
    </div>
  );
}
function Second() {
  return (
    <div style={{ marginLeft: "30px" }}>
      <p style={{ color: "#097FD3", marginBottom: "10px", marginTop: "10px" }}>
        About Us
      </p>
      <h2 style={{ marginBottom: "40px" }}>SCH Hospital Overview</h2>
      <div className="second-flex" style={{ display: "flex", gap: "30px" }}>
        <div
          className="width"
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div className="third-grid">
            <img
              src="/Image/bed.svg"
              alt="img1"
              style={{ height: "99%", width: "30vw" }}
            />
            <img
              src="/Image/building.svg"
              alt="img2"
              style={{ height: "99%", width: "30vw" }}
            />
          </div>
          <div className="width2">
            <img
              src="/Image/device.svg"
              alt="img3"
              style={{ height: "65%", width: "20vw" }}
            />
          </div>
          <div
            className="width3"
            style={{ position: "absolute", transform: "translate(185%,0)" }}
          >
            <img
              src="/Image/hospital-icon.svg"
              alt="img4"
              style={{ width: "13vw" }}
            />
          </div>
        </div>
        <div>
          <h2
            style={{
              color: "white",
              marginBottom: "20px",
              backgroundImage:
                "linear-gradient(90.06deg, #234CBB 49.75%, rgba(9, 127, 211, 0) 105.2%)",
              padding: "10px",
              borderRadius: "7px",
            }}
          >
            Why South City Himal Hospital
          </h2>
          <p style={{ marginBottom: "15px", marginRight: "30px" }}>
            Modern medical education had started in Nepal along with the birth
            of Bir Hospital in 1889 AD. Although MBBS program was introduced in
            1978 in Institute of Medicine, it did not have its own teaching
            hospital in beginning, so the clinical teaching and learning
            activities were centered in Bir and other hospitals in the valley.
            With the support of Tribhuvan University post graduate education was
            started in Bir hospital and other hospitals in the valley through
            Post Graduate Medical Education Coordination Committee from 1994 AD.
          </p>
          <p style={{ marginBottom: "15px", marginRight: "30px" }}>
            Building up on these experiences and based on the national need, Bir
            Hospital was developed into the National Academy of Medical Sciences
            (NAMS) on its glorious 114 years in 2002. This was another landmark
            achievement in the fields of medical education and health services
            which has provided great optimism and opportunities for the doctors
            working under the Ministry of Health to teach and to be taught.
            Modern medical education had started in Nepal along with the birth
            of Bir Hospital in 1889 AD. Although MBBS program was introduced in
            1978 in Institute of Medicine, it did not have its own teaching
            hospital in beginning, so the clinical teaching and learning
            activities were centered in Bir and other hospitals in the valley.
          </p>
          <p style={{ marginBottom: "15px", marginRight: "30px" }}>
            Building up on these experiences and based on the national need, Bir
            Hospital was developed into the National Academy of Medical Sciences
            (NAMS) on its glorious 114 years in 2002. This was another landmark
            achievement in the fields of medical education and health services
            which has provided great optimism and opportunities for the doctors
            working under the Ministry of Health to teach and to be taught.
            Modern medical education had started in Nepal along with the birth
            of Bir Hospital in 1889 AD. Although MBBS program was introduced in
            1978 in Institute of Medicine, it did not have its own teaching
            hospital in beginning, so the clinical teaching and learning
            activities were centered in Bir and other hospitals in the valley.
          </p>
        </div>
      </div>
    </div>
  );
}
