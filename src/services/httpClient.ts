import axios from 'axios';

const httpClient = axios.create({
  xsrfCookieName: 'CSRF-TOKEN',
  xsrfHeaderName: 'csrf-token'
});

export default httpClient;