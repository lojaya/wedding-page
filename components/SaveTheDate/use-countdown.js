import { useState, useEffect } from "react";

export default function useCountdown(date = "2021-12-18", countdownText) {
  const calculateTimeLeft = (date) => {
    const difference = +new Date(date) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date));

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);
  });

  return (
    <>
      <div className="col">
        <div className="card card-body countdown-shadow mb-4 mb-lg-0 p-3">
          <span className="counter text-primary mb-1 ">{timeLeft.days}</span>{" "}
          <span className="label ">{countdownText.day}</span>
        </div>
      </div>
      <div className="col">
        <div className="card card-body countdown-shadow mb-4 mb-lg-0 p-3">
          <span className="counter text-primary mb-1 ">{timeLeft.hours}</span>{" "}
          <span className="label ">{countdownText.hour}</span>
        </div>
      </div>
      <div className="col">
        <div className="card card-body countdown-shadow mb-4 mb-lg-0 p-3">
          <span className="counter text-primary mb-1 ">{timeLeft.minutes}</span>{" "}
          <span className="label ">{countdownText.minute}</span>
        </div>
      </div>
      <div className="col">
        <div className="card card-body countdown-shadow p-3">
          <span className="counter text-primary mb-1">{timeLeft.seconds}</span>{" "}
          <span className="label">{countdownText.second}</span>
        </div>
      </div>
    </>
  );
}
