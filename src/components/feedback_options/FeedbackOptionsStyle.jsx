import styled from 'styled-components';

export const FeedbackBtn = styled.button`
  background-color: ${p => p.theme.colors.btnColor};
  padding: 5px 20px;
  text-transform: capitalize;
  color: ${p => p.theme.colors.text};
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: ${p => p.theme.colors.accent};
  }
`;
