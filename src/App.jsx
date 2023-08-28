// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesPage from './routes';

function App() {
  return (
    <Router>
      <RoutesPage />
    </Router>
  );
}

export default App;
