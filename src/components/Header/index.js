import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
`

function Header () {
    return (            
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconHeader/>
        </HeaderContainer>
    )
}

export default Header