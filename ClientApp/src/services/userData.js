import axios from 'axios';

const userDataService = () => {
  return axios.get(
    'api/home/userdetail'
  );
}


export {
  userDataService
}