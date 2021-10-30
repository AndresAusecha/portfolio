import { useState } from 'react';
import styles from '../../styles/Navbar.module.scss'

export const Navbar = () => {
  const [active, setActive] = useState("home");
  return (
  <div className={styles.navbar}>
    <ul>
      <li onClick={() => { setActive("home") }} style={{ backgroundColor: active === "home" ? "#13ecff" : "" }}><button style={{background:'none' }} >Home</button></li>
      <li onClick={() => { setActive("news") }} style={{ backgroundColor: active === "news" ? "#13ecff" : "" }}><button style={{background:'none' }} >News</button></li>
      <li onClick={() => { setActive("contact") }} style={{ backgroundColor: active === "contact" ? "#13ecff" : "" }}><button style={{background:'none' }} >Contact</button></li>
      <li onClick={() => { setActive("about") }} style={{ backgroundColor: active === "about" ? "#13ecff" : "" }}><button style={{background:'none' }} >About</button></li>
    </ul> 
  </div>
)};
