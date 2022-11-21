import styled from 'styled-components';

export const SwitcherWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.margin[2]}px;
`;

export const Select = styled.select`
  width: ${({ theme }) => theme.width[4]}px;
  height: ${({ theme }) => theme.height[2]}px;
  background-color: ${({ theme }) => theme.btnBackground};
  color: ${({ theme }) => theme.mainTextColor};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize[4]}px;
  border-radius: ${({ theme }) => theme.borderRadius[0]}px;
  border: ${({ theme }) => theme.borderSize[1]}px solid ${({ theme }) => theme.btnBorder};
  cursor: pointer;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.mainTextColor};
  font-size: ${({ theme }) => theme.fontSize[1]};
`;
