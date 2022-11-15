import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: ${theme.fontWeight[0]};
}
html {
    font-size: ${theme.fontSize[0]}px;
}
`;

export default Global;
