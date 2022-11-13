import styled from 'styled-components';
import { APP_WIDTH, APP_HEIGHT } from '@constants/StyleConstants';
import { APP_BG_COLOR, MAIN_TEXT_COLOR } from '@constants/Theme';

const AppWrapper = styled.div`
  width: ${APP_WIDTH};
  height: ${APP_HEIGHT};
  display: flex;
  flex-direction: column;
  background-color: ${APP_BG_COLOR};
  color: ${MAIN_TEXT_COLOR};
`;

export default AppWrapper;
