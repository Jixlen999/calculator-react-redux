import styled from 'styled-components';
import theme from '@src/theme';

const { padding, margin, fontSize } = theme;

export const PanelWrapper = styled.div`
  padding: ${padding[2]}px;
`;

export const Heading = styled.h2`
  margin: ${margin[2]}px 0;
  font-size: ${fontSize[5]}px;
`;
