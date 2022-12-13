/* eslint-disable react/jsx-key */
import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import styled from 'styled-components'

const iconesList = [perfil, sacola]

const Icones = styled.ul`
    display: flex;
    align-items: center;
`
const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`



function IconHeader () {
    return (
        <Icones>
            { iconesList.map(icon => (
                <Icone className='icone'><img src={icon}></img></Icone>
            )) }
        </Icones>
    )
}

export default IconHeader