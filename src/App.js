import React from 'react';
import GlobalStyle from './components/GlobalStyle';
// Global Style
// Import Pages
import AboutUs from './pages/AboutUs';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
