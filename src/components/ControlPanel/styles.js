import styled from 'styled-components';
import { BTN_FONT_SIZE, ARROW_BTN_HOVER_FONT } from '@constants/StyleConstants';

export const PanelWrapper = styled.div`
  padding-right: 15px;
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  width: ${(props) => (props.isShown ? '20%' : '2%')};
`;

export const HistoryBtn = styled.div`
  margin-left: 5px;
  font-size: ${BTN_FONT_SIZE};
  display: inline-block;
  width: ${ARROW_BTN_HOVER_FONT};
  cursor: pointer;
  &:hover {
    font-size: ${ARROW_BTN_HOVER_FONT};
  }
  transition: all 0.3s ease;
`;
