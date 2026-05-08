
const NavigationBar = ({opciones}) => {

    return (
        <>
        <aside>
        <nav className="bg-white w-full antialiased rounded-lg text-[18px] border-b-1 border-[var(--main-hard)] bg-white">
                <div className=" px-4 mx-auto 2xl:px-0 py-2">
                    <div className="flex items-start justify-between text-[var(--main-hard)]">
                        <ul class="flex justify-start gap-6 md:gap-8 py-3  ">
                            {opciones}
                            {/* {<NavBarItem label={"Pendientes"}></NavBarItem>
                            <NavBarItem label={"Realizadas"}></NavBarItem>
                            <NavBarItem label={"En curso"}></NavBarItem>} */}
                        </ul>
                    </div>
                </div>
        </nav>
        </aside>
        </>
    );
};

export default NavigationBar