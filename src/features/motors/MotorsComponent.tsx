import React, { useEffect, useState } from "react";
import { MotorList } from "../../app/data";
import FormComponent from "../form/FormComponent";

const MotorComponent: React.FC = () => {
  const [selectedMotor, setSelectedMotor] = useState("");

  return (
    <div>
      <div className="card-container">
        {MotorList.map((motor) => (
          <div
            className="card"
            onClick={() => setSelectedMotor(motor?.name || "")}
          >
            <h2>{motor?.name}</h2>
          </div>
        ))}
      </div>
      <div className="form-container">
        {selectedMotor.length > 0 && (
          <FormComponent selectedMotor={selectedMotor} />
        )}
      </div>
    </div>
  );
};

export default MotorComponent;
