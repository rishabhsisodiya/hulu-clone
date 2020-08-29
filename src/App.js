import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/NavBar/Nav';
import Results from './Components/Results/Results';
import requests from './Request/requests';

function App() {
  const [selectedGenre, setSelectedGenre] = useState(requests.fetchTrending);
  return (
    <div className="App">
      <Header/> 
      {/* pass method to set genre in nav */}
      <Nav setSelectedGenre={setSelectedGenre}/>
      {/* pass selected genre from nav bar */}
      <Results selectedGenre={selectedGenre}/>
    </div>
  );
}

export default App;
