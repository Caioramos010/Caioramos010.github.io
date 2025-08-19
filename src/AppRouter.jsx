import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Curriculo from './pages/Curriculo';
import Artigos from './pages/Artigos';

function AppRouter() {
  
const basename = import.meta.env.BASE_URL || '/';
  
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/Portifolio" element={<Home />} />
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/artigos" element={<Artigos />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
