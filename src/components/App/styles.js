import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.mainBackground};
  color: ${({ theme }) => theme.mainTextColor};
`;

export default AppWrapper;
