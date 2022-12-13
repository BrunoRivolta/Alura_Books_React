/* eslint-disable react/react-in-jsx-scope */
import Header from './components/Header'
import Pesquisa from './components/Pesquisa'
import styled from 'styled-components'
import UltimosLancamentos from './components/UltimosLancamentos'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

function App () {
    return (
        <AppContainer>
            <Header/>
            <Pesquisa />
            <UltimosLancamentos/>
        </AppContainer>
    )
}

export default App
