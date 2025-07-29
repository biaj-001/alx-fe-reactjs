import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const data = await searchUsers(username, location, minRepos);
      setUsers(data.items);
    } catch (err) {
      setError('Something went wrong while searching.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-3 mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="px-4 py-2 border rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="px-4 py-2 border rounded"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min Repositories"
          className="px-4 py-2 border rounded"
        />
        <button type="submit" className="sm:col-span-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {users.length > 0 && (
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="bg-white p-4 rounded shadow flex items-center gap-4">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="font-semibold text-lg">{user.login}</h3>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  View Profile
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
