import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(https://api.github.com/users/${username});
    return response.data;
  } catch (error) {
    // This custom error message is key for the 'API request handling' test
    throw new Error("Looks like we can't find the user.");
  }
};
