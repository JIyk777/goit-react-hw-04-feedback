import { Box } from 'components/box/Box';
import { FeedbackBtn } from './FeedbackOptionsStyle';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);

  return (
    <Box display="flex" justifyContent="space-between" width="70%">
      {keys.map(key => (
        <FeedbackBtn
          type="button"
          key={key}
          onClick={() => onLeaveFeedback(key)}
        >
          {key}
        </FeedbackBtn>
      ))}
    </Box>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
