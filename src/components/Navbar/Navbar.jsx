import "./Navbar.css"

const Navbar = () => {

    return(
        <>
            <nav className="navbar">

                <div className="navbar_a">

                    <div className="navbar-link">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Zapatillas</a></li>
                        <li><a href="#">Poleron</a></li>
                        <li><a href="#">Contacto</a></li>
                        
                    </div>
                </div>
            </nav>

            <div className="sections">
                <section>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, necessitatibus!</p>
                </section>
                <section>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, necessitatibus!</p>
                </section>
            </div>
        </>
    )
}

export default Navbar