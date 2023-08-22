import React from 'react';
import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return <Notification message="There is no feedback" />;
  }

  return (
    <div>
      <h2>Feedback Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total feedback: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
