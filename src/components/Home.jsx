
import MenuLateral from "./MenuLateral"

const Home = ()=>{

    return (
        <>
            <main className="bg-amber-50 min-h-screen
            grid grid-cols-12">
                
                <MenuLateral></MenuLateral> {/*Ancho: 2 columnas*/}

                <div className="col-span-10">{/*Ancho: 2 columnas*/}

                </div>
            </main>
        </>
    )
}

export default Home