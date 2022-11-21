import styled from 'styled-components';

const CalculatorWrapper = styled.div`
  padding-right: ${({ theme }) => theme.padding[1]}px;
  height: ${({ theme }) => theme.height[6]}%;
  width: ${({ theme }) => theme.width[3]}%;
  border-right: ${({ theme }) => theme.borderSize[1]}px solid ${({ theme }) => theme.borderColor};
`;

export default CalculatorWrapper;
