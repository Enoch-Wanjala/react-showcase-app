import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

//this is our navbar
function Navbar() {
    return (
        <>
            {/* Navbar container with desktop layout and mobile stacking */}
            <div className={styles.navbar}>
                {/* Navigation links list: flex row on desktop, stacked on smaller screens */}
                <ul className={styles.navLinks}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;