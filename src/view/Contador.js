import React, { useState } from "react";
import styled from "styled-components";

export default function Contador() {
  //01 - contador de clicks - 'count'
  const [count, setCount] = useState(180);

  return (
    <Section>
      {/*02 - Lógica do contador*/}
      <button onClick={() => setCount(count - 1)}>
        <p class="oi">faltam</p><p class="bye">{count}</p>
        <p class="oi"> dias</p>
      </button>
    </Section>
  );
}

const Section = styled.section`
  margin: 0em;
  padding-top: 10em;
  padding-bottom: 10em;
  display: flex;
  justify-content: center;
  font-family: Tillitium;
  .oi {
    font-size: 2em;
    margin: 0em;
    padding: -4em -4em -4em -4em;
  }
  .bye {
    font-weight: bold;
    margin: 0em;
    padding: 0em;
    font-size: 10em;
  }
  button {
    background: white;
    width: 20em;
    height: 20em;
    border-radius: 10em;
    border: 0em;
  }
`;
