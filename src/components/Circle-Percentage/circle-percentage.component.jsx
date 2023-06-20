import "./circle.css";

export default function Circle({ percentage }) {
  return (
    <div className="circle-wrapper">
      <div
        className="circle-content"
        style={{
          background: `radial-gradient(closest-side, white 85%, transparent 80% 10%),conic-gradient(hotpink ${percentage}%, pink 0)`,
        }}
      >
        <p style={{ fontSize: "40px" }}>{percentage}%</p>
        <p style={{ fontSize: "18px", marginTop: "10px" }}>LOAD</p>
      </div>
    </div>
  );
}
