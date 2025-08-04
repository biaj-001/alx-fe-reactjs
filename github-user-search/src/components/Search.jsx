// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) return;

    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(input);
      setUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter GitHub username"
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="mt-4">Loading...</p>}

      {/* Error */}
      {error && <p className="mt-4 text-red-500">Looks like we cant find the user</p>}

      {/* User info */}
      {user && (
        <div className="mt-4 border-t pt-4">
          <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full" />
          <h2 className="text-lg font-semibold">{user.name || user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;

