import React from "react";
import  HomePage  from './pages/HomePage'
import { Container } from './styles/Container.style'
import GlobalStyles from './styles/Global'
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <HomePage />
      </Container>
    </div>
  )
}

export default App;
