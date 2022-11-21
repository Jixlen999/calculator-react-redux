import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.padding[1]}px;
  width: ${({ theme }) => theme.width[3]}%;
  height: ${({ theme }) => theme.height[6]}%;
  overflow: hidden;
`;

export default HomeWrapper;
