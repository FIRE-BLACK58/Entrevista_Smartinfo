import { useState } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';

export default function TaskFormPage() {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const router = useRouter();

  const validate = () => {
    const errors = {};
    if (!newTask.title) errors.title = 'Título es requerido';
    if (!newTask.description) errors.description = 'Descripción es requerida';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);

    await createTask();
    await router.push('/tasks');
    console.log(createTask)
  };

  /*const createTask = async () => {
    try {
      await fetch('http://localhost:3001/tasks', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
    } catch (error) {
      console.error(error);
    }
  };*/
  const url = 'https://localhost:3001/tasks';
const createTask = {
  title: 'Tarea de ejemplo',
  description: 'Descripción de la tarea de ejemplo'
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(createTask)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));


  const handleChange = (e) =>
    setNewTask({ ...newTask, [e.target.name]: e.target.value });

  return (
    <Grid centered verticalAlign="middle" columns="3" style={{ height: '80vh' }}>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <h1>Crear Tarea</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              label="Título"
              placeholder="Título"
              name="title"
              onChange={handleChange}
              error={errors.title ? { content: 'Por favor ingrese un título', pointing: 'above' } : null}
            />
            <Form.TextArea
              label="Descripción"
              placeholder="Descripción"
              name="description"
              onChange={handleChange}
              error={errors.description ? { content: 'Por favor ingrese una descripción', pointing: 'above' } : null}
            />
            <Button primary>Guardar</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
