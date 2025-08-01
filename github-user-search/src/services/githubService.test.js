// __tests__/githubService.test.js
import axios from 'axios';
import { fetchUserData } from '../src/services/githubService';

jest.mock('axios');

describe('fetchUserData', () => {
  it('calls the correct GitHub API endpoint', async () => {
    const mockData = {
      login: 'octocat',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      html_url: 'https://github.com/octocat',
    };

    axios.get.mockResolvedValue({ data: mockData });

    const result = await fetchUserData('octocat');

    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/octocat');
    expect(result).toEqual(mockData);
  });

  it('throws an error if the user is not found', async () => {
    axios.get.mockRejectedValue(new Error('User not found'));

    await expect(fetchUserData('unknownuser')).rejects.toThrow('User not found');
  });
});
