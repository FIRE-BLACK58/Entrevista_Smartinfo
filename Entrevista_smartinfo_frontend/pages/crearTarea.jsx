import React, { useState } from "react";
import axios from "axios";

const CreateTask = () => {
  const [_id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("tasks", {
        _id,
        title,
        description,
        done,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          ID:
          <input
            type="text"
            value={_id}
            onChange={(event) => setId(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Descripción:
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Completado:
          <input
            type="checkbox"
            checked={done}
            onChange={(event) => setDone(event.target.checked)}
          />
        </label>
      </div>
      <button type="submit">Crear tarea</button>
    </form>
  );
};

export default CreateTask;
