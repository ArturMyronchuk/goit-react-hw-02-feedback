import React from 'react';
import css from './fedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.button}>
    {options.map(option => (
      <button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
