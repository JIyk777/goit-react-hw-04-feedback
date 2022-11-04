import React, { Component } from 'react';
import { Statistics } from './statistics/Statistics';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedback_options/FeedbackOptions';
import { Notification } from './notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = key => {
    this.setState(prevState => {
      return {
        ...prevState,
        [key]: prevState[key] + 1,
      };
    });
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return ((good / (good + neutral + bad)) * 100).toFixed(2);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.leaveFeedback}
        ></FeedbackOptions>
        {this.countTotalFeedback(this.state) === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          ></Statistics>
        )}
      </Section>
    );
  }
}
