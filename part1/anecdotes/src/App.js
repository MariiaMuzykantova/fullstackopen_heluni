import React, { useState } from "react";
import Button from "./Button";
import Content from "./Content";
import Header from "./Header";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const headers = {
    anecdoteOfTheDay: "Anecdote of the day",
    anecdoteMostVotes: "Anecdote with most votes",
  };

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length));
  const pointsResult = [...points];
  const maxVotes = Math.max(...pointsResult);
  const maxValueIndex = pointsResult.indexOf(maxVotes);

  const countVote = () => {
    pointsResult[selected] += 1;
    setPoints(pointsResult);
  };
  const newAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  return (
    <div>
      <Header header={headers.anecdoteOfTheDay} />
      <Content
        anecdote={anecdotes[selected]}
        voteInfo={pointsResult[selected]}
      />
      <div>
      <Button text="vote" onClick={countVote} />
      <Button text="next anecdote" onClick={newAnecdote} />
      </div>
      <Header header={headers.anecdoteOfTheDay} />
      {maxVotes ? (
        <Content
          anecdote={anecdotes[maxValueIndex]}
          voteInfo={pointsResult[maxValueIndex]}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
