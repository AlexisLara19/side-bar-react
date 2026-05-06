
import MenuLateral from "./MenuLateral"
import { Routes,Route } from "react-router-dom"
import MiPerfil from "./sub_components/MiPerfil"
import ServiciosActivos from "./sub_components/ServiciosActivos"
const Home = ()=>{

    return (
        <>
            <main className="bg-amber-100 min-h-screen
            grid grid-cols-12">
                
                <MenuLateral></MenuLateral> {/*Ancho: 2 columnas*/}

                <div className="col-span-10">{/*Ancho: 2 columnas*/}
                    <Routes>
                        <Route index element={<MiPerfil></MiPerfil>}></Route>
                        <Route path="activos" element={<ServiciosActivos></ServiciosActivos>}></Route>

                    </Routes>
                </div>
            </main>
        </>
    )
}

export default Home