import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LandingPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [uniqueCategories, setUniqueCategories] = useState(new Set());
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get('https://api.publicapis.org/entries')
      .then((response) => {
        setMovies(response.data.entries);
        const categories = new Set(response.data.entries.map(movie => movie.Category));
        setUniqueCategories(categories);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
        setError('Error fetching movie data. Please try again later.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = movies.filter(movie =>
      movie.API.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || movie.Category === selectedCategory)
    );
    setFilteredMovies(filtered);
  }, [searchTerm, selectedCategory, movies]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    toggleDropdown();
  };

  return (
    <div>
      <div style={{ borderBottom: '1px solid #e2e8f0', position: 'fixed', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <button onClick={toggleDropdown}>
          Filter
        </button>
        {isDropdownOpen && (
          <div className="dropdown">
            {Array.from(uniqueCategories).map((category, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="card-container mt-16">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : loading ? (
          <p className='loading'>Loading...</p>
        ) : (
          filteredMovies.map((movie, index) => (
            <div key={index} className="movie-card">
              <img
                src={'https://i.imgur.com/gdWuDGD.jpg'}
                alt={movie.title}
                style={{
                  width: '100%',
                  height: '50%',
                  objectFit: 'cover',
                  borderTopLeftRadius: '15px',
                  borderTopRightRadius: '15px',
                }}
              />
              <h2 className="text-padding">{movie.API}</h2>
              <p className="text-padding">{movie.Description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LandingPage;
