import styled from 'styled-components';
import theme from '@src/theme';

const { padding, height, transition, margin, fontSize } = theme;

export const PanelWrapper = styled.div`
  padding-right: ${padding[1]}px;
  height: ${height[6]}%;
  display: flex;
  align-items: center;
  transition: all ${transition[0]}s ease;
  width: ${(props) => (props.isShown ? '20%' : '2%')};
`;

export const HistoryBtn = styled.div`
  margin-left: ${margin[1]}px;
  font-size: ${fontSize[4]}px;
  display: inline-block;
  width: ${fontSize[5]}px;
  cursor: pointer;
  &:hover {
    font-size: ${fontSize[5]}px;
  }
  transition: all ${transition[0]}s ease;
`;
