import axios from 'axios';

const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi  = async(url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'f6fe3a9adfmsheabd2882477f0fap15e1e4jsnbf2a516ec6c1',
    }
  });
  return data;
}