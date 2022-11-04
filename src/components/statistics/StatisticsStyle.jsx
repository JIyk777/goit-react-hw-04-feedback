import styled from 'styled-components';

export const StatisticsTitle = styled.p`
  font-size: 22px;
  font-weight: 900;
`;

export const StatisticsInfo = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  font-size: 20px;
  font-weight: 800;
  color: ${p => p.theme.colors.infoColor};
  border-bottom: 2px solid ${p => p.theme.colors.infoColor};
`;
export const StatisticsInfoValue = styled.span`
  font-size: 18px;
  font-weight: 900;
  margin-left: 10px;
  color: black;
`;
