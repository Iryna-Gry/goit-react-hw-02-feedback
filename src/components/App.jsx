import { Container } from 'components/container/Container.styled';
import { FirstLetter, LogoTitle } from 'components/logo';
import { Statistics } from 'components/statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
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
      <Container>
        <LogoTitle href="#">
          <FirstLetter>E</FirstLetter>xpresso <FirstLetter>C</FirstLetter>afe
        </LogoTitle>
        <Section
          title="Please, leave your feedback"
          className="Button-container"
        >
          <FeedbackOptions
            options={feedbackBtnsSet}
            onLeaveFeedback={this.feedbackCountIncrement}
          ></FeedbackOptions>
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              positivePercentage={positivePercentage}
              total={totalFeedback}
            ></Statistics>
          </Section>
        )}
      </Container>
    );
  }
}
