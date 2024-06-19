import React from "react";

const ButtonDraw = ({ steps, counterHandle, messages }) => {
  return (
    <div className="buttons">
      <button
        style={{ backgroundColor: "#7950f2", color: "#fff" }}
        onClick={() => counterHandle("previous")}
        disabled={steps === 1}
      >
        Previous
      </button>
      <button
        style={{ backgroundColor: "#7950f2", color: "#fff" }}
        onClick={() => counterHandle("next")}
        disabled={steps === messages.length}
      >
        Next
      </button>
    </div>
  );
};

export default ButtonDraw;
