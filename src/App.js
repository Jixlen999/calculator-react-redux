import styled from 'styled-components';
import Header from '@components/Header/Header';
import Calculator from '@components/Calculator/Calculator';

const AppWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

function App() {
    return (
        <AppWrapper>
            <Header />
            <Calculator />
        </AppWrapper>
    );
}

export default App;
