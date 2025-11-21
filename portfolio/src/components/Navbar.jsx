import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/case-studies">Case Studies</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/recent-work">Recent Work</Link></li>
        <li><Link to="/contact">Get in Touch</Link></li>
      </ul>
    </nav>
  );
};
