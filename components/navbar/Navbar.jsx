import styles from '../../styles/Navbar.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/router'

export const Navbar = () => {
  const router = useRouter();
  return (
  <div className={styles.navbar}>
    <ul>
      <li style={{ backgroundColor: router.asPath === "/" ? "#13ecff" : "" }}>
        <Link
          href={"/"}
        >
          Home
        </Link>
      </li>
      <li style={{ backgroundColor: router.asPath === "/tutorials" ? "#13ecff" : "" }}>
        <Link
          href={"/tutorials"}
        >
          Tutorials
        </Link>
      </li>
      {/*
      <li onClick={() => { setActive("contact") }} style={{ backgroundColor: active === "contact" ? "#13ecff" : "" }}><button style={{background:'none' }} >Contact</button></li>
      <li onClick={() => { setActive("about") }} style={{ backgroundColor: active === "about" ? "#13ecff" : "" }}><button style={{background:'none' }} >About</button></li> 
      */}
    </ul> 
  </div>
)};
