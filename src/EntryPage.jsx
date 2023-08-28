// EntryPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const EntryPage = () => {
  return (
    <div className="center-content">
      <h1>Welcome to My App</h1>
      <Link to="/login">Go to Login</Link>
    </div>
  );
};

export default EntryPage;
