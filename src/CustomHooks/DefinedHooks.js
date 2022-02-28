import { useState, useEffect, useDebugValue } from "react";
import employeeData from "./employeeData";

function useEmployeeCountHooks() {
  let [empCount, setEmpCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setEmpCount(employeeData.length);
    }, 2000);
  });
  useDebugValue(empCount != 0 ? "No fixed" : empCount);

  return [empCount];
}

function useCustomTimeHooks() {
  function getCurrentTime() {
    let date = new Date();
    return (
      date.getHours() + ": " + date.getMinutes() + ": " + date.getSeconds()
    );
  }

  let [time, setTime] = useState(getCurrentTime());

  setTimeout(() => {
    setTime(getCurrentTime());
  }, 1000);

  return [time, setTime];
}

export { useEmployeeCountHooks, useCustomTimeHooks };
