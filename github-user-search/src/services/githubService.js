import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';

export const fetchUserData = async (username) => {
  const response = await axios.get(`${API_BASE_URL}/users/${username}`);
  return response.data;
};

export const searchUsers = async (username, location, minRepos) => {
  let query = '';

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const response = await axios.get(`${API_BASE_URL}/search/users?q=${encodeURIComponent(query.trim())}`);
  return response.data;
};
