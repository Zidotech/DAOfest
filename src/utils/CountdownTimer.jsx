/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeRemaining = useCallback(() => {
    const currentTime = new Date().getTime();
    const targetTime = targetDate.getTime();
    const timeRemainingInSeconds = Math.max(
      0,
      Math.floor((targetTime - currentTime) / 1000)
    );
    return timeRemainingInSeconds;
  }, [targetDate]);

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate, calculateTimeRemaining]);

  const calculateTimeUnits = (time) => {
    const days = Math.floor(time / (24 * 60 * 60));
    const hours = Math.floor((time % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return { days, hours, minutes, seconds };
  };

  const formatTimeUnit = (unit) => String(unit).padStart(2, "0");

  const { days, hours, minutes, seconds } = calculateTimeUnits(timeRemaining);

  return (
    <div className="text-[20px] font-Poppins font-bold text-center flex gap-x-2 sm:gap-x-4 rounded p-3 timer shadow-xl  w-fit  bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm">
      <div className="border-r-[3px] border-Primary pr-4 text-left">
        <p>{formatTimeUnit(days)}</p>
        <span> Days</span>
      </div>
      <div className="border-r-[3px] border-Green pr-4 text-left">
        <p>{formatTimeUnit(hours)}</p>
        <span>Hours</span>
      </div>
      <div className="border-r-[3px] border-Brown pr-4 text-left">
        <p>{formatTimeUnit(minutes)}</p>
        <span>Minutes</span>
      </div>
      <div className="text-left">
        <p>{formatTimeUnit(seconds)}</p>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
