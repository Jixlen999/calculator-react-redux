import styled from 'styled-components';
import theme from '@src/theme';

const { padding, width, height } = theme;

const HomeWrapper = styled.div`
  display: flex;
  padding: ${padding[1]}px;
  width: ${width[3]}%;
  height: ${height[6]}%;
  overflow: hidden;
`;

export default HomeWrapper;
