import "./Navbar.css"
import { NavLink } from "react-router-dom";

const Navbar =()=>{
    return(<nav className="navbar">
        <div className="logo">
            <h2>Intellect</h2>
        </div>

        <div className="widgets">
            <NavLink className="link" to="/" >Slider</NavLink>
            <NavLink className="link" to="/volume" >Volume</NavLink>
        </div>

        <div className="documentation">
            <span> Documentation </span>    
        </div>

    </nav>)
}

export default Navbar;