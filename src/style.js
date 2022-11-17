import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const { fontWeight, fontSize } = theme;

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: ${fontWeight[0]};
}
html {
    font-size: ${fontSize[0]}px;
}
`;

export default Global;
