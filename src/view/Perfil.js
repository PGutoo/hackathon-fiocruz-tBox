import React from "react";
import styled from "styled-components";

import imgperfil from "../img/imgperfil.jpg";

export default function Perfil() {
  return (
    <Figure>
      <img src={imgperfil} alt="Perfil" width="370" height="565" />
    </Figure>
  );
}

const Figure = styled.figure`
  display: flex;
  justify-content: center;
`;
