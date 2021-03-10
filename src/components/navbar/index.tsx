import { h, FunctionalComponent } from "preact";
import { Link } from 'preact-router/match';

import styles from "./navbar.module.css";

const NavigationBar: FunctionalComponent = () => (
  <nav className={styles.navbar}>
    <ul className={styles.nav}>
      <li className={styles.navItem}><Link className={styles.navLink} href="#intro">Intro</Link></li>
      <li className={styles.navItem}><Link className={styles.navLink} href="#faq">FAQ</Link></li>
      <li className={styles.navItem}><Link className={styles.navLink} href="#sponsor">Sponsors</Link></li>
      {/* <li className={styles.navItem}><Link className={styles.navLink} href="#demographics">Demographics</Link></li> */}
      <li className={styles.navItem}><Link className={styles.navLink} href="#schedule">Schedule</Link></li>
      <li className={styles.navItem}><Link className={styles.navLink} href="#team">Team</Link></li>
      {/* <li className={styles.navItem}><Link className={styles.navLink} href="#map">Map</Link></li> */}
    </ul>
  </nav>
);

export default NavigationBar;
