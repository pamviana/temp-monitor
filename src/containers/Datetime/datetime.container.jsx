import "./datetime.css";
import { useState, useEffect } from "react";

export default function Datetime() {
  function getDate() {
    const options = { month: "2-digit", day: "2-digit", year: "numeric" };
    const formattedDate = new Date().toLocaleDateString("en-US", options);

    return formattedDate;
  }

  function getTime() {
    const options = {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    const currTime = new Date().toLocaleTimeString([], options);
    
    return currTime;
  }

  const [date, setDate] = useState(getDate());
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(getDate());
      setTime(getTime());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className="datetime-container">
      <p style={{ fontSize: "44px" }}>{time}</p>
      <p>{date}</p>
    </div>
  );
}
