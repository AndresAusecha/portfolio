import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar } from "../../components/navbar/Navbar";
import styles from '../../styles/Tutorials.module.scss';

const Tutorials = () => {
  return (
    <>
    <Navbar />
    <div className="parallax">
      <div className={styles.tutorials}>
        <h2>
          Tutorials
        </h2>
        <p>to be continued...</p>
      </div>
    </div>
    </>
  )
}

export default Tutorials;
