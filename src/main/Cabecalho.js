import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import TBox from '../../img/TBox.png';


export default function Cabecalho () {
  return(
    <Header>  
      <Nav>
        <Link to='/'><img src={TBox} alt="Logo_TBox" width="70" height="60"/></Link>
      </Nav>
    </Header>
  )
}

const Header = styled.header`
margin: 0em;
  display: flex;
  justify-content: center;
  padding-bottom: 1em;
`;

const Nav = styled.nav`
`;