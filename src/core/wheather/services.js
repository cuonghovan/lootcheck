import axios from 'axios';

const wheatherEndpoint = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '2564bdf9d7c3dadfe0ca81742e3180c4';

export const fetchWheatherInfo = location => {
  return axios.get(`${wheatherEndpoint}?q=${location}&appid=${apiKey}`)
       .then(response => response)
       .catch(error => error);
}
