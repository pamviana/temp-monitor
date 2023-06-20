import "./circle.css";

export default function Circle({ percentage }) {
  const value = 42;
  return (
    <div className="circle-wrapper">
      <div
        className="circle-content"
        style={{
          background: `radial-gradient(closest-side, white 85%, transparent 80% 10%),conic-gradient(hotpink ${value}%, pink 0)`,
        }}
      >
        <p style={{ fontSize: "40px" }}>{value}%</p>
        <p style={{ fontSize: "18px", marginTop: "10px" }}>LOAD</p>
      </div>
    </div>
  );
}
