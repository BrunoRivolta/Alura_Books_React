/* eslint-disable react/jsx-key */
import styled from 'styled-components'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const Opcoes = styled.li`
    align-items: center;
    display: flex;
    padding-left: 60px;
`

const Opcao = styled.ul`
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
    font-size: 16px;
    min-width: 120px;
    height: 100%;
    padding: 0 5px;
`

function OpcoesHeader () {
    return (
        <Opcoes>
            { textoOpcoes.map(texto => (
                <Opcao><p>{texto}</p></Opcao>
            )) }
        </Opcoes>
    )
}

export default OpcoesHeader