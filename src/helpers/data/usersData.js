import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/users.json`)
    .then((resp) => {
      if (resp.data) {
        resolve(resp.data);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

export default getUsers;
