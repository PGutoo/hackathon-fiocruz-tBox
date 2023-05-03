import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import './Login.css';

import sus from "../img/sus.png";
import tbox from "../img/tbox.png";
import atendimento from "../img/atendimento.jpg";

export default function() {
  return (
    <section class="container">
      <div class="login">
        <img src={tbox} width="100" height="" alt="Logo" />
        <h1>Login</h1>
        <form>
          <p>Usuário</p>
          <input type="text" name="" placeholder="Inscrição do SUS ou CPF" />
          <p>Senha</p>
          <input type="password" name="" placeholder="Senha de Acesso" />
          <input type="submit" name="" value="Entrar" />
          <Link to="/">Esqueci a minha Senha</Link>
          <img src={sus} class="usuario2" width="200" height="" alt="" />
        </form>
      </div>
    </section>
  );
}

const Section = styled.section``;
