
import { Button, Card, Container, Grid } from "semantic-ui-react";
export default function HomePage({tasks}){
    if (tasks.length === 0) return(
        <Grid centered verticalAlign="middle" columns="1" style={{ height: "80vh"}}>
            <Grid.Row>
                <Grid.Column textAlign="center">
                    <h1>No hay tareas aun</h1>
                    <img src="https://cdn-icons-png.flaticon.com/128/7466/7466140.png" alt="Aun no hay Tareas"/>
                    <div>
                        <Button primary>Crear nueva tarea</Button>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
    return(
        <Container>
            <Card.Group itemsPerRow={4}>
                {tasks.map((task) => (
                    <Card key={task._id}>
                        <Card.Content>
                            <Card.Header>{task.title}</Card.Header>
                            <p>{task.description}</p>
                        </Card.Content>
                        <Card.Content extra>
                            <Button primary>View</Button>
                            <Button secondary>Edit</Button>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        </Container>
    );
}

export const getServerSideProps = async (ctx) => {
    const res = await fetch ('http://localhost:3001/tasks')
    const tasks = await res.json()
    return {
        props: {
            tasks,
        }
    }
}