import axios from 'axios';

axios.get('http://localhost:3001/tasks')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });