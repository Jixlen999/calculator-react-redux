import styled from 'styled-components';
import { SETTINGS_HEADER_SIZE, TWENTY_PX_MARGIN } from '@constants/StyleConstants';

export const PanelWrapper = styled.div`
  padding: 20px;
`;

export const Heading = styled.h2`
  margin: ${TWENTY_PX_MARGIN} 0;
  font-size: ${SETTINGS_HEADER_SIZE};
`;
