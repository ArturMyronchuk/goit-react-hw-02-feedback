// import React, { Component } from 'react';
// import css from './fedback.module.css';
// class FeedbackWidget extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedback = type => {
//     this.setState(prevState => ({
//       [type]: prevState[type] + 1,
//     }));
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div className={css.container}>
//         <h2>Please Leave Feedback</h2>
//         <div className={css.btn}>
//           <button onClick={() => this.handleFeedback('good')}>Good</button>
//           <button onClick={() => this.handleFeedback('neutral')}>
//             Neutral
//           </button>
//           <button onClick={() => this.handleFeedback('bad')}>Bad</button>
//         </div>
//         <h2>Statistics</h2>
//         <p>Good: {good}</p>
//         <p>Neutral: {neutral}</p>
//         <p>Bad: {bad}</p>
//         <p>Total: {totalFeedback}</p>
//         <p>Positive feedback: {positivePercentage}%</p>
//       </div>
//     );
//   }
// }

// export default FeedbackWidget;
import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const feedbackOptions = ['good', 'neutral', 'bad'];

    return (
      <div>
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default FeedbackWidget;
