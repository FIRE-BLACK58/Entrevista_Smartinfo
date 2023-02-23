import axios from "axios";

const data = {
  "_id": "2",
  "title": "Prueba BackEnd",
  "description": "Registro 2",
  "done": true
};

axios.post('http://localhost:3001/tasks', JSON.stringify(data), {
  headers: {
    "Content-Type": "application/json"
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
