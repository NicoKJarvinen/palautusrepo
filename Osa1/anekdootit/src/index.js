import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [topVote, setTopVote] = useState(0);
  const [top, setTop] = useState(0);

  const btnHandler = () => {
    const rnd = Math.floor(Math.random() * 6);
    setSelected(rnd);
    console.log(rnd);
    sortNumbers();
  };

  const sortNumbers = () => {
    let copy = [...votes];
    copy.sort((a, b) => b - a);
    setTop(copy[0]);
  };

  const voteHandler = () => {
    let topvote = 0;
    let copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    console.log(copy);

    sortNumbers();

    console.log(top);
    console.log(topvote);
    if (copy[selected] > top) {
      setTopVote(selected);
      console.log(topVote);
    }
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <Votes points={votes[selected]} />
      <div>
        <Button text="vote" handleClick={voteHandler} />
        <Button text="next anecdote" handleClick={btnHandler} />
      </div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[topVote]}</p>
      <p>has {top} votes.</p>
    </div>
  );
};
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Votes = (props) => {
  //const copy = [props.points]

  return (
    <div>
      <p>has {props.points} votes</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
