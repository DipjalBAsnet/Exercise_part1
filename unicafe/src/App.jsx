import { useState } from "react";

const Statistics = ({ good, neutral, bad, positive, average, total }) => {
  return (
    <div>
      <h1>Statistics</h1> <br />
      <p>Good :{good}</p>
      <p>Neutral :{neutral}</p>
      <p>bad : {bad}</p>
      <p>all : {total}</p>
      <p>average : {average}</p>
      <p>positive : {positive}%</p>
    </div>
  );
};

const App = () => {
  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = good + bad + neutral / 3;
  const positive = (good / total) * 100;
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleBadClick}>bad</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        average={average}
        positive={positive}
        total={total}
      />
    </div>
  );
};

export default App;

