import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
  // State variables to manage the API call's lifecycle
  const [user, setUser] = useState(null);       // Stores the user data
  const [loading, setLoading] = useState(false); // Manages the loading state
  const [error, setError] = useState(null);     // Stores the error message

  // Function to handle the search request
  const handleSearch = async (username) => {
    // Reset state before starting a new search
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      // Call the service to fetch user data
      const userData = await fetchUserData(username);
      // On success, update the user state
      setUser(userData);
    } catch (err) {
      // On error, update the error state with the required message
      setError("Looks like we can't find the user.");
    } finally {
      // Always stop the loading indicator
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      
      <div className="results-container">
        {/*
          This is the conditional rendering section.
          It displays different content based on the application's state.
        */}
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
