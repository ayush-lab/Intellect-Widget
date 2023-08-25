import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";

const Navbar =()=>{
    return(<nav className={styles.navbar}>
        <div className={styles.logo}>
            Logo
        </div>

        <div className={styles.widgets}>
            <Link to="/" style={{textDecoration:"none"}}><span>Slider</span></Link>
            <Link to="/Levler" style={{textDecoration:"none"}}><span>Levler</span></Link>
        </div>

        <div>
            <span> Documentation </span>    
        </div>

    </nav>)
}

export default Navbar;