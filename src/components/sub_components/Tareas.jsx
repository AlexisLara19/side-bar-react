import { Routes,Route } from "react-router-dom"
import NavBarItem from "./NavBar/NavBarItem"
import NavigationBar from "./NavBar/NavigationBar"
import TaskCompleteTable from "./Task_Components/TaskCompleteTable"
import TaskGoingTable from "./Task_Components/TaskGoingTable"
import TaskWaitingTable from "./Task_Components/TaskWaitingTable"


const Tareas =()=>{
    const opcionesNavbar = [
        {
            id: 1,
            name: "Pendientes",
            link: "/tareas/pendientes"
        },
        {
            id: 2,
            name: "Realizadas",
            link: "/tareas/realizadas"
        },
        {
            id: 3,
            name: "En curso",
            link: "/tareas/encurso"
        } 
    ]

    const opcionesRenderizadas = opcionesNavbar.map((opcionActiva)=>(
      <NavBarItem id={opcionActiva.id} to={opcionActiva.link} label={opcionActiva.name}></NavBarItem>
    ))

    return (
        <>
        <div className="flex-col space-y-2">

            {/* Titulo */}
            <div>
                <h1 className="text-[52px] font-light text-[#234b63] mb-14 mx-8">
                    Tareas
                </h1>
            </div>

            {/* Navigation Bar */}
            <div className="mx-10 mb-10">
                <NavigationBar opciones={opcionesRenderizadas}>
                </NavigationBar>
            </div>
            
            {/* Cambio de tabla estatica a tablas de rendarizado dinamico*/}
            <div className="max-h-full p-1 m-3 h-max ">
                {/* <TaskCompleteTable></TaskCompleteTable> */}
                <Routes>
                        <Route index element={<TaskCompleteTable></TaskCompleteTable>}></Route>
                        <Route path="/encurso" element={<TaskGoingTable></TaskGoingTable>}></Route>
                        <Route path="/realizadas" element={<TaskCompleteTable></TaskCompleteTable>}></Route>
                        <Route path="/pendientes" element={<TaskWaitingTable></TaskWaitingTable>}></Route>
                </Routes>

            </div>
            
            
        </div>
    </>

    )
}

export default Tareas