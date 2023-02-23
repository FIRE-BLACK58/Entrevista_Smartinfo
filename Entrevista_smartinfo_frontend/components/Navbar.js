
import { Menu, Container, Button } from "semantic-ui-react";
import { useRouter } from "next/router";


export const Navbar = () => {

    const router = useRouter()

    return (
        <Menu>
            <Container>
                <Menu.Item>
                    <img src="https://images.vexels.com/media/users/3/136192/isolated/preview/abf69e669b7896f08b3ce09098db0c1e-inicio-icono-de-trazo-en-azul.png" alt="vercel" onClick={() => router.push('/')}/>
                    || Home
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Button primary size="mini" onClick={() => router.push('/tasks/new')}>
                            Nueva Tarea
                        </Button>
                        ||
                        <Button primary size="mini" onClick={() => router.push('/tasks/')}>
                            Ver Tareas
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    )
}