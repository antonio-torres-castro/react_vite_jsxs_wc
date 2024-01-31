import React, {useState} from "react";
import "./Navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav_logo"> Contract V </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="#"> INICIO</a>
                <a href="#"> BUSCAR</a>
                <a href="#"> NUEVO</a>
                <a href="#"> CUENTA</a>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar