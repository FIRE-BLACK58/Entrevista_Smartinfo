
import { useState } from 'react'
import {Form, Grid, Button} from 'semantic-ui-react'
import { useRouter } from 'next/router';


export default function TaskFormPage(){

    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
    });

    const [errors, setErrors] = useState({})

    const router= useRouter()


    const validate = () => {
        const errors = {};
        if (!newTask.title) errors.title = "Titulo es Requerido"
        if (!newTask.description) errors.description = "Descripcion es Requerida"
         return errors;
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        let errors = validate();
        if (Object.keys(errors).length) return setErrors(errors)

        await createTask();
        await router.push('/tasks')
        }

        const createTask = async () => {
            try{
                await fetch('http://localhost:3001/tasks', {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newTask) 
                })
            } catch(error){
                console.error(error)
            }
        }

    const handleChange = (e) => setNewTask({...newTask, [e.target.name]: e.target.value });
    return(
        <Grid
            centered
            verticalAlign='middle'
            columns="3"
            style={{height: "80vh"}}
        >
            <Grid.Row>
                <Grid.Column textAlign='center'>
                    <h1>Crear Tarea</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Input label='Titulo' placeholder='Titulo' name="title" onChange={handleChange}/>
                        <Form.TextArea label='Descripcion' placeholder='Descripcion' name="description" onChange={handleChange}/>              

                        <Button primary>
                            Guardar
                        </Button>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}