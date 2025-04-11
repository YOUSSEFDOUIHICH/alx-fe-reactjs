import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const fetchUser = async (username) => {
  const res = await axios.get(`${BASE_URL}/${username}`);
  return res.data;
};