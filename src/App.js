import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import requests from './axios/requests'
import Results from './components/Results'

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="App">
    <Header  setSelectedOption={setSelectedOption} />
    <Home  />
    <Results selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
