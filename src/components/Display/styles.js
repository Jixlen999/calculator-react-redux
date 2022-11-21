import styled from 'styled-components';

export const DisplayWrapper = styled.div`
  min-height: ${({ theme }) => theme.height[1]}%;
  padding: ${({ theme }) => theme.padding[1]}px;
  text-align: right;
  border-bottom: ${({ theme }) => theme.borderSize[1]}px solid ${({ theme }) => theme.borderColor};
`;
export const DisplayText = styled.p`
  font-size: ${({ theme }) => theme.fontSize[4]}px;
  font-weight: ${({ theme }) => theme.fontWeight[1]};
`;
export const ExpressionText = styled.p`
  font-size: ${({ theme }) => theme.fontSize[0]}px;
`;
