import styled from 'styled-components';
import theme from '@src/theme';

const { padding, height, width, borderSize, borderColor } = theme;

const CalculatorWrapper = styled.div`
  padding-right: ${padding[1]}px;
  height: ${height[6]}%;
  width: ${width[3]}%;
  border-right: ${borderSize[1]}px solid ${borderColor};
`;

export default CalculatorWrapper;
