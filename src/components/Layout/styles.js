import styled from 'styled-components';

const LayoutWrapper = styled.div`
  width: ${({ theme }) => theme.width[3]}vw;
  height: ${({ theme }) => theme.height[5]}vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.mainBackground};
  color: ${({ theme }) => theme.mainTextColor};
`;

export default LayoutWrapper;
