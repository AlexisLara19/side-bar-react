
const NavigationBar = ({opciones}) => {

    return (
        <>
        <aside>
        <nav className="bg-[var(--main-color)] w-full antialiased text-[18px] border-b-1 border-[var(--main-hard)]">
                <div className=" px-4 mx-auto 2xl:px-0  ">
                    <div className="flex items-start justify-between text-[var(--main-hard)]">
                        <ul class="flex justify-start gap-6 md:gap-8 ">
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