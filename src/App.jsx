// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import { useEffect, useState } from 'react';

import PersonInf from './components/PersonInfo';
import Home from './components/Home';

function App() {
  const [members, setMembers] = useState([]);

  

  return (
   <h1>App.jsx</h1> 
  )
}

export default App;
