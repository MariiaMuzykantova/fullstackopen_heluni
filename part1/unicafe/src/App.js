import React, { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import Header from "./Header";
import Statistics from "./Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = {
    firstParagraph: "give feedback",
    secondParagraph: "statistics",
    buttonDetails: [
      {
        name: "good",
        onClick: () => setGood(good + 1),
      },
      {
        name: "neutral",
        onClick: () => setNeutral(neutral + 1),
      },
      {
        name: "bad",
        onClick: () => setBad(bad + 1),
      },
    ],
  };
  return (
    <>
      <Header header={feedback.firstParagraph} />
      <ButtonGroup button={feedback.buttonDetails} />
      <Header header={feedback.secondParagraph} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
