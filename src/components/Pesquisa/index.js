/* eslint-disable react/react-in-jsx-scope */
import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h1`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitulo =  styled.h2`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado =  styled.div`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0 20px 0;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

//onBlur é o ato de entrar e sair do campo de pesquisa

function Pesquisa () {

    const [livrosPesquisados, setLivrosPesquisados] = useState([]) // o livrosPesquisados é o valor guardado, o setLivrosPesquisados é quando alteramos o valor, um guarda um altera

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <Input 
                placeholder="Escreva sua proxima leitura"
                onBlur={evento => {
                    const textoDigitado = (evento.target.value).toLowerCase()
                    const resultadoPesquisa = []
                    for (let i = 0; i < livros.length; i++) {
                        const nome = (livros[i].nome).toLowerCase()
                        if(nome.match(textoDigitado) != null) {
                            resultadoPesquisa.push(livros[i])
                        }
                    }
                    setLivrosPesquisados(resultadoPesquisa)
                }}          
            />
            { livrosPesquisados.map( livro => (
                <Resultado key={livro}>
                    <img src={livro.src}/>
                    <p>{livro.nome}</p>
                </Resultado>
            )) }
        </PesquisaContainer>
    )
}

export default Pesquisa