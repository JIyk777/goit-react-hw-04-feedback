import { useState } from 'react';
import { Statistics } from './statistics/Statistics';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedback_options/FeedbackOptions';
import { Notification } from './notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {
    good,
    neutral,
    bad,
  };

  const countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return ((good / (good + neutral + bad)) * 100).toFixed(2);
  };

  const leaveFeedback = key => {
    switch (key) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={options}
        onLeaveFeedback={leaveFeedback}
      ></FeedbackOptions>
      {countTotalFeedback(options) === 0 ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback(options)}
          positivePercentage={countPositiveFeedbackPercentage(options)}
        ></Statistics>
      )}
    </Section>
  );
};
