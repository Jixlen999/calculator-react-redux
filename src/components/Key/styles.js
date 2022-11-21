import styled from 'styled-components';

const KeyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.width[1]}vw;
  height: ${({ theme }) => theme.height[0]}vh;
  font-size: ${({ theme }) => theme.fontSize[4]}px;
  color: ${({ theme }) => theme.mainTextColor};
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight[1]};
  border-radius: ${({ theme }) => theme.borderRadius[0]}px;
  border: ${({ theme }) => theme.borderSize[1]}px solid ${({ theme }) => theme.btnBorder};
  background-color: ${({ theme }) => theme.btnBackground};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.btnHover};
  }
`;

export default KeyWrapper;
