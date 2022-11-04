import React, { Component } from 'react';
import { Box } from 'components/box/Box';
import {
  StatisticsTitle,
  StatisticsInfo,
  StatisticsInfoValue,
} from './StatisticsStyle';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="60%"
      >
        <StatisticsTitle>Statistics</StatisticsTitle>
        <StatisticsInfo>
          Good:
          <StatisticsInfoValue>{good}</StatisticsInfoValue>
        </StatisticsInfo>
        <StatisticsInfo>
          Neutral:
          <StatisticsInfoValue>{neutral}</StatisticsInfoValue>
        </StatisticsInfo>
        <StatisticsInfo>
          Bad:
          <StatisticsInfoValue>{bad}</StatisticsInfoValue>
        </StatisticsInfo>
        <StatisticsInfo>
          Total:
          <StatisticsInfoValue>{total}</StatisticsInfoValue>
        </StatisticsInfo>
        <StatisticsInfo>
          Positive feedback:
          <StatisticsInfoValue>{positivePercentage}%</StatisticsInfoValue>
        </StatisticsInfo>
      </Box>
    );
  }
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
