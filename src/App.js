import React, { useState } from "react";
import "./App.css";
import ButtonDraw from "./buttonDraw";

const messages = ["Learn React", "Apply for Jobs", "Invest your new Income"];
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
function App() {
  const [steps, setSteps] = useState(1); // Initialize steps with 1 for the first message
  const [isOpen, setopen] = useState(true);
  const [dateHan, setdateHan] = useState("");
  const [count, setCount] = useState(0);
  const [stepCount, setstepCount] = useState(1);

  const counterHandle = (action) => {
    if (action === "next" && steps < messages.length) {
      setSteps((step) => step + 1);
    } else if (action === "previous" && steps > 1) {
      setSteps((step) => step - 1);
    }
  };

  const clearState = () => {
    setopen((stat) => !stat);
    //setSteps(1);
  };

  function formatDateWithWeekDay(daysToAdd) {
    const date = dateHan ? new Date(dateHan) : new Date();
    date.setDate(date.getDate() + daysToAdd);
    const res = date.toLocaleDateString(undefined, options);
    setdateHan((ss) => (ss = res));
  }

  const handleClickDays = (action) => {
    if (action === "add") {
      formatDateWithWeekDay(stepCount);
      setCount((step) => step + stepCount);
    } else if (action === "sub") {
      formatDateWithWeekDay(-stepCount);
      setCount((step) => step - stepCount);
    }
  };

  const handleClickstepCount = (action) => {
    if (action === "add") {
      setstepCount((step) => step + 1);
    } else if (action === "sub") {
      setstepCount((step) => step - 1);
    }
  };

  const getCountMessage = () => {
    if (count === 0) {
      return "Today is ";
    }
    return `${Math.abs(count)} Days ${
      count > 0 ? "from Today is " : "ago was "
    }`;
  };
  return (
    <>
      <button className="close" onClick={clearState}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={steps >= 1 ? "active" : ""}>1</div>
            <div className={steps >= 2 ? "active" : ""}>2</div>
            <div className={steps === 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {steps} : {messages[steps - 1]}
          </p>
          <ButtonDraw
            steps={steps}
            counterHandle={counterHandle}
            messages={messages}
          />
        </div>
      )}

      <div className="steps">
        <div className="counter-container">
          <button
            onClick={() => handleClickstepCount("sub")}
            className="counter-button"
          >
            -
          </button>
          <p className="count-text">Step: {stepCount}</p>
          <button
            onClick={() => handleClickstepCount("add")}
            className="counter-button"
          >
            +
          </button>
        </div>

        <div className="counter-container">
          <button
            onClick={() => handleClickDays("sub")}
            className="counter-button"
          >
            -
          </button>
          <p className="count-text">Count: {count}</p>
          <button
            onClick={() => handleClickDays("add")}
            className="counter-button"
          >
            +
          </button>
        </div>
        <p className="date-text">
          Show the Date: {getCountMessage()}
          {dateHan
            ? dateHan
            : new Date().toLocaleDateString(undefined, options)}
        </p>
      </div>
    </>
  );
}

export default App;
