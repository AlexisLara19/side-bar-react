
import MenuLateral from "./MenuLateral"
import { Routes,Route } from "react-router-dom"
import MiPerfil from "./sub_components/MiPerfil"
import Resumen from "./sub_components/Resumen"
import Tareas from "./sub_components/Tareas"
import { useState } from "react"

const Home = ()=>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    return (
        <>
            <main className="bg-[var(--main-color)] min-h-screen
            grid grid-cols-[auto_1fr]">
                
                <MenuLateral
                    isOpen={isSidebarOpen}
                    onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
                ></MenuLateral>

                <div>
                    <Routes>
                        <Route index element={<MiPerfil></MiPerfil>}></Route>
                        <Route path="resumen" element={<Resumen></Resumen>}></Route>
                        <Route path="tareas" element={<Tareas></Tareas>}></Route>
                    </Routes>
                </div>
            </main>
        </>
    )
}

export default Home
