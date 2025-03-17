import "./Why.css";

export default function Why() {
  const icon = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <div className="textz">
        <h1>Why Choose Us?</h1>
        <p>
          The history of hospital service in Nepal starts in the year 1889 with
          the establishment of South himal Hospital, the oldest hospital now
          providing general care to tertiary care to the people of Nepal. South
          himal hospital is the first teaching hospital for compounders, dresser
          and later nurses.
        </p>
      </div>
      <div className="background-graphic">
        <div className="ten-icons">
          {icon.map((i) => (
            <Icon key={i} />
          ))}
        </div>
        <div className="right-img">
          <img
            src="/Image/doctor3.png"
            alt="doctor3"
            style={{ height: "480px", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="imgz-box">
      <div className="img">
        <img src="/Image/image 53.png" alt="icon" />
      </div>
      <p>Quality</p>
      <p>Safety First</p>
    </div>
  );
}
