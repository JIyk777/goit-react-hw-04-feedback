import { Box } from 'components/box/Box';
import { SectionTitle } from './SectionStyle';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <Box
      mr="auto"
      ml="auto"
      as="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="20%"
      bg="white"
      mt="50px"
      boxShadow="0px 0px 40px 0px #9AA0AD"
      borderRadius="20px"
      p="40px"
    >
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Box>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
