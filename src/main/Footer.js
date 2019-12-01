import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import perfil from "../../img/perfil.png";
import alarme from "../../img/alarme.png";
import camera from "../../img/camera.png";
import trofeu from "../../img/trofeu.png";
import Login from "../../img/login.png";

export default function Footer() {
  return (
    <Rodape>
      <Nav>
        <Link to="/Perfil">
          {" "}
          <img src={perfil} alt="Perfil" width="50" />
        </Link>
      </Nav>
      <Nav>
        <Link to="/Alarm">
          <img src={alarme} alt="Alarme" width="50" />
        </Link>
      </Nav>
      <Link to="/">
        <img src={camera} alt="Bibilioteca" width="50" />
      </Link>
      <Nav>
        <Link to="/">
          <img src={trofeu} alt="Prêmios" width="50" />
        </Link>
      </Nav>
      <Nav>
        <Link to="/Login">
          <img src={Login} alt="Login" width="50" />
        </Link>
      </Nav>
    </Rodape>
  );
}

const Rodape = styled.footer`
  margin: 0em;
  display: flex;
  justify-content: space-around;
`;
const Nav = styled.nav``;
