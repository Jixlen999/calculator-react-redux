import styled from 'styled-components';
import Header from '@components/Header/Header';
import Main from '@components/Main/Main';

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
            <Main />
        </AppWrapper>
    );
}

export default App;
