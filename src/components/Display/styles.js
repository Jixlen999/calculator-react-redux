import styled from 'styled-components';
import theme from '@src/theme';

const { height, padding, borderSize, borderColor, fontSize, fontWeight } = theme;

export const DisplayWrapper = styled.div`
  min-height: ${height[1]}%;
  padding: ${padding[1]}px;
  text-align: right;
  border-bottom: ${borderSize[1]}px solid ${borderColor};
`;
export const DisplayText = styled.p`
  font-size: ${fontSize[4]}px;
  font-weight: ${fontWeight[1]};
`;
export const ExpressionText = styled.p`
  font-size: ${fontSize[0]}px;
`;
