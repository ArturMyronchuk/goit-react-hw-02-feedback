import React, { Component } from 'react';
import FeedbackWidget from './Feedback/feedback';
import css from './Feedback/fedback.module.css';

class App extends Component {
  render() {
    return (
      <div className={css.container}>
        <FeedbackWidget />
      </div>
    );
  }
}

export default App;
