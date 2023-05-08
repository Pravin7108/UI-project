import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './screen/Home';
import AO from './components/AO';
import DJ from "./components/DJ";
import FF from "./components/FF";
import AC from "./components/AC";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/AO" element={<AO/>}/>
          <Route path="/DJ" element={<DJ/>}/>
          <Route path="/FF" element={<FF/>}/>
          <Route path="/AC" element={<AC/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;