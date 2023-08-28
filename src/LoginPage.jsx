import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigateTo = useNavigate();

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }

    // Perform login logic and validation
    // Example: if (username === 'user' && password === 'pass') ...
    // For simplicity, assume login is successful
    navigateTo('/landing');
  };

  return (
    <div className="center-content">
      <div>
        <h1 className="text-3xl text-red font-semibold mb-4 text-center">Login</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleLogin}
            className="bg-black text-white rounded-md p-2 hover:bg-gray-900 w-full"
          >
            Login
          </button>
        </div>
      </div>
      {error && <p className="bg-red">{error}</p>}
    </div>
  );
};

export default LoginPage;
