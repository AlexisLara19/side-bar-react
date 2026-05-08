
{/* Elementos de tabla Tareas en curso  */}
{/* Titulo / Proyecto / Categoria / Fecha de inicio de la actividad / Boton de agregar reporte / Agregar documentacion / Boton de Finalizar tarea */}

const TaskGoingItem = ({titulo,proyecto,categoria,fecha}) => {
    return(
        <>
            <td className="justify-center">{titulo}</td>
            <td>{proyecto}</td>
            <td><span className="bg-[var(--yellow-line)]">{categoria}</span></td>
            <td>{fecha}</td>
            <td className="justify-center gap-x-4.5 pl-10">
                {/* Redactar reporte */}
                <button class="btn btn-circle btn-text btn-sm cursor-pointer" aria-label="Action button">
                    <i class="fa-solid fa-file-pen text-[20px] hover:text-[var(--secondary-soft)]"></i></button>
                {/* Agregar documentacion */}
                <button class="btn btn-circle btn-text btn-sm cursor-pointer" aria-label="Action button">
                    <i class="fa-solid fa-file-circle-plus text-[20px] hover:text-[var(--secondary-soft)]"></i></button>
                {/* Finalizar tarea */}
                <button class="btn btn-circle btn-text btn-sm cursor-pointer" aria-label="Action button">
                    <i class="fa-solid fa-arrow-right-from-bracket text-[20px] hover:text-[var(--secondary-soft)]"></i></button>
            </td>
        
        </>

    )
}

export default TaskGoingItem;