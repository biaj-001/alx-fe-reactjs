import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    // 1. Reset states before a new search
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      // 2. Await the API call
      const userData = await fetchUserData(username);
      // 3. On success, set the user data
      setUser(userData);
    } catch (err) {
      // 4. On error, set the specific error message
      setError(err.message);
    } finally {
      // 5. Always set loading to false after the request
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      
      <div className="results-container">
        {/* Conditional Rendering logic */}
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        
        {user && (
          <div className="user-profile">
            <img src={user.avatar_url} alt={user.login} />
            <h2>{user.name || user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
