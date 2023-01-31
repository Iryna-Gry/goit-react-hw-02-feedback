import React, { Component } from 'react';
import 'components/feedback/Feedback.css';
import { FeedbackOptions } from 'components/button/Button';
import { PropTypes } from 'prop-types';
import { Statistics } from 'components/statistics/Statistics';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  feedbackCountIncrement = event => {
    const value = event.target.value;

    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
  };
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const feedbackBtnsSet = Object.keys(this.state);

    return (
      <>
        <p className="Feedback__text">Please, leave your feedback</p>
        <div className="Button-container">
          <FeedbackOptions
            value={feedbackBtnsSet}
            onLeaveFeedback={this.feedbackCountIncrement}
          ></FeedbackOptions>
        </div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          positivePercentage={positivePercentage}
          total={totalFeedback}
        ></Statistics>
      </>
    );
  }
}
// Feedback.propTypes = {};
