/* eslint-disable react/jsx-key */
import { livros } from './dadosUltimosLanc'
import { Titulo } from '../Titulo'
import imagemLivro from '../../images/livro2.png'
import CardRecomenda from '../CardRecomanda'
import styled from 'styled-components'

const UltimosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos () {
    return (
        <UltimosContainer>
            <Titulo 
                cor='#EB9B00' 
                tamanho='36px' 
                alinhamento='center'
            >ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livros.map(livro => (
                    <img src={livro.src}/>
                )) }
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo='Talvez você se interesse por'
                subtitulo='Angular 11'
                descricao='Construindo uma aplicação com a plataforma do Google'
                imagem={imagemLivro}
            />
            <CardRecomenda 
                titulo='Titulo Interessante'
                subtitulo='Angular 121'
                descricao='Construindo uma aplicação sem plataforma'
                imagem={imagemLivro}
            />
        </UltimosContainer>
        
    )
}

export default UltimosLancamentos