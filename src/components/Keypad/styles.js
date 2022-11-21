import styled from 'styled-components';

export const KeypadWrapper = styled.div`
  width: ${({ theme }) => theme.width[3]}%;
  height: ${({ theme }) => theme.height[4]}%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.padding[2]}px ${({ theme }) => theme.padding[3]}px 0px
    ${({ theme }) => theme.padding[3]}px;
`;

export const Key = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap[0]}%;
  justify-content: space-between;
  align-items: center;
`;
