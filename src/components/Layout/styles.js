import styled from 'styled-components';
import theme from '@src/theme';

const { width, height, appBgColor, mainTextColor } = theme;

const LayoutWrapper = styled.div`
  width: ${width[3]}vw;
  height: ${height[5]}vh;
  display: flex;
  flex-direction: column;
  background-color: ${appBgColor};
  color: ${mainTextColor};
`;

export default LayoutWrapper;
