import React from 'react';
import Jokes from './components/Jokes';
import styled from 'styled-components';

function App() {
  return (
    <MainStyles>
      <Box>
        <H1>Joke Generator</H1>
        <Jokes />
      </Box>
    </MainStyles>
  );
}

const MainStyles = styled.section`
  height: 100vh;
  max-width: 100%;
  display: flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  flex-direction: column;
  background-color: #2D2E2E;
`;

const Box = styled.div`
  background-color: #BCABAE;
  width: 50%;
  padding: 10% 6% 10% 6%;
  border-radius: 15px;
  border: 4px solid #716769;
`;

const H1 = styled.h1`
  font-size: 3.5rem;
  color: #0F0F0F;
  text-shadow: 1px 1px 5px white;
  border-bottom: 2px solid black;
  padding-bottom: 2%;
`;

export default App;


