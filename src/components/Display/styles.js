import styled from 'styled-components';
import theme from '@src/theme';

export const DisplayWrapper = styled.div`
  min-height: ${theme.height[1]}%;
  padding: ${theme.padding[1]}px;
  text-align: right;
  border-bottom: ${theme.borderSize[1]}px solid ${theme.borderColor};
`;
export const DisplayText = styled.p`
  font-size: ${theme.fontSize[4]}px;
  font-weight: ${theme.fontWeight[1]};
`;
export const ExpressionText = styled.p`
  font-size: ${theme.fontSize[0]}px;
`;
