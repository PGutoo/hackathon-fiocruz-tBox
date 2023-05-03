import React from "react";
import styled from "styled-components";

import calendario from "../img/calendario.png";

export default function Alarm() {
  return (
    <Section>
      <img src={calendario} alt="Calendário" width="380" height="400" />
      <div>
        <p>Consula: Dia 25/03/2020</p>
        <p>Exame: Dia 03/04/2020</p>
        <p>Alarme</p>
        <p>6:00 AM</p>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
