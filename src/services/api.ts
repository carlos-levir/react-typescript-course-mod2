import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://api.github.com/users',
});
