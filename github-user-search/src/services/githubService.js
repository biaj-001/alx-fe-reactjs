import axios from 'axios';

/**
 * Fetches user data from the GitHub API.
 * @param {string} username - The GitHub username to search for.
 * @returns {Promise<object>} The user data object.
 * @throws {Error} If the API request fails.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(https://api.github.com/users/${username});
    return response.data;
  } catch (error) {
    // Re-throw a custom error to be handled by the component
    throw new Error("Looks like we can't find the user.");
  }
};
