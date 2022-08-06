import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '39e53025fce915ab6be1f89ff5487e0e';

export const fetchWeather = async (nameOfCity) => {
  const { data } = await axios.get(URL, {
    params: {
      q: nameOfCity,
      units: 'metric',
      APPID: API_KEY,
    },
  });
  return data;
};
