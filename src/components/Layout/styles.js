import styled from 'styled-components';
import theme from '@src/theme';

const LayoutWrapper = styled.div`
  width: ${theme.width[3]}vw;
  height: ${theme.height[5]}vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.APP_BG_COLOR};
  color: ${theme.MAIN_TEXT_COLOR};
`;

export default LayoutWrapper;
