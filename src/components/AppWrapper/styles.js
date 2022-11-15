import styled from 'styled-components';
import { APP_WIDTH, APP_HEIGHT } from '@constants/StyleConstants';
import { APP_BG_COLOR, MAIN_TEXT_COLOR } from '@constants/Theme';

const AppWrap = styled.div`
  width: ${APP_WIDTH};
  height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: ${APP_BG_COLOR};
  color: ${MAIN_TEXT_COLOR};
`;

export default AppWrap;
