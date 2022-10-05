import { Navbar } from "../../components/navbar/Navbar";
import styles from '../../styles/Tutorials.module.scss';

const Tutorials = () => {
  return (
    <>
    <Navbar />
    <div className="parallax">
      <div className={styles.tutorials}>
        <h2>
          Tutorials page
        </h2>
        <p>
          content will be added soon...
        </p>
      </div>
    </div>
    </>
  )
}

export default Tutorials;
