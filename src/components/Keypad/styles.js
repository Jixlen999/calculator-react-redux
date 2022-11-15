import styled from 'styled-components';
import theme from '@src/theme';

export const KeypadWrapper = styled.div`
  width: ${theme.width[3]}%;
  height: ${theme.height[4]}%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.padding[2]}px ${theme.padding[3]}px 0px ${theme.padding[3]}px;
`;

export const Key = styled.div`
  display: flex;
  gap: ${theme.gap[0]}%;
  justify-content: space-between;
  align-items: center;
`;
