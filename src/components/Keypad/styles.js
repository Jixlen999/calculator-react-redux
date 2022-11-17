import styled from 'styled-components';
import theme from '@src/theme';

const { width, height, padding, gap } = theme;

export const KeypadWrapper = styled.div`
  width: ${width[3]}%;
  height: ${height[4]}%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${padding[2]}px ${padding[3]}px 0px ${padding[3]}px;
`;

export const Key = styled.div`
  display: flex;
  gap: ${gap[0]}%;
  justify-content: space-between;
  align-items: center;
`;
