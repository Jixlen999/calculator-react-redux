import styled from 'styled-components';
import theme from '@src/theme';

const CalculatorWrapper = styled.div`
  padding-right: ${theme.padding[1]}px;
  height: ${theme.height[6]}%;
  width: ${theme.width[3]}%;
  border-right: ${theme.borderSize[1]}px solid ${theme.borderColor};
`;

export default CalculatorWrapper;
