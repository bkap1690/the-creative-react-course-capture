import React from 'react';
import GlobalStyle from './components/GlobalStyle';
// Global Style
// Import Pages
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
