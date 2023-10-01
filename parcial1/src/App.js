import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carros from './Componentes/Carros';
import Detail from './Componentes/Detail';
import Login from './Componentes/Login';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/carros/" element={<Carros />} />
         <Route path="/carros/:carModel/:carYear/:carMaker/:partName/:description/:available/:price" element={<Detail/>} />
       </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
