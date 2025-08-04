import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

// This function now accepts additional parameters for advanced search
export const searchUsers = async (username, location = '', minRepos = '') => {
  try {
    let query = username;

    // Build the advanced query string
    if (location) {
      query += +location:${location};
    }
    if (minRepos) {
      query += +repos:>=${minRepos};
    }

    const response = await axios.get(${GITHUB_API_URL}?q=${query});
    
    // The API response for search is an object with an 'items' array
    return response.data.items;
  } catch (error) {
    console.error('Error in githubService:', error);
    throw error;
  }
};
