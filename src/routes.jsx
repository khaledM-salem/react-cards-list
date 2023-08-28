// src/routes.jsx
import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import { EntryPage, LoginPage, LandingPage } from './screens';

const RoutesPage = () => (
  <Routes>
    <Route path="/" exact element={<EntryPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/landing" element={<LandingPage />} />
  </Routes>
);

export default RoutesPage;
