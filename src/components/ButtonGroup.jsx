import React, { useState } from "react";

const ButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div>
      <button
        onClick={() => handleButtonClick("day")}
        style={{ backgroundColor: selectedButton === "day" ? "blue" : "white" }}
      >
        Day
      </button>
      <button
        onClick={() => handleButtonClick("week")}
        style={{ backgroundColor: selectedButton === "week" ? "blue" : "white" }}
      >
        Week
      </button>
      <button
        onClick={() => handleButtonClick("month")}
        style={{ backgroundColor: selectedButton === "month" ? "blue" : "white" }}
      >
        Month
      </button>
    </div>
  );
};

export default ButtonGroup;
