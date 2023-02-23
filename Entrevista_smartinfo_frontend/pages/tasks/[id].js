

export default function TaskDetail(){
    return(
        <div>
            Detalles de Tarea
        </div>
    )
}

export async function getServerSideProps({ query }){
    console.log (query);

    return {
        props: {},
    };
}