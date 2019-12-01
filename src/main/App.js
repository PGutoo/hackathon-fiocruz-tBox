import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import Cabecalho from "./Cabecalho";
import Routes from "./Routes";
import Footer from "./Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Corpo>
        <Cabecalho />
        <Routes />
        <Footer />
      </Corpo>
    </BrowserRouter>
  );
}

const Corpo = styled.body``;
