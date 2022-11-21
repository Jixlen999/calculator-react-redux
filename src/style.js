import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
}
html {
    font-size: 18px;
}
`;

export default Global;
