import React from "react";
import HeaderComponent from "./features/header/HeaderComponent";
import MotorComponent from "./features/motors/MotorsComponent";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderComponent />
      <MotorComponent />
      <button onClick={() => navigate("/view")}>View Records</button>
    </div>
  );
}

export default Home;
