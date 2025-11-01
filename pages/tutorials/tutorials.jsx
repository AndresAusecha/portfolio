import { Navbar } from "../../components/navbar/Navbar";
import styles from '../../styles/Tutorials.module.scss';
import TutorialCard from "./TutorialCard";

const Tutorials = () => {
  return (
    <>
    <Navbar />
    <div className="parallax">
      <div className={styles.tutorials}>
        <h2>
          Tutorials
        </h2>
        <div className={styles.tutorialsContent}>
          <TutorialCard
            image="/images/useReducer.png"
            title="useState vs. useReducer"
            description="Refactor a component with useReducer to make it look more readable"
            tutorialId="refactor-with-useReducer"
          />
          <TutorialCard
            image=""
            title=""
            description="The BFF a pattern to connect your microsservices with the outside world"
            tutorialId="the-BFF-pattern"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Tutorials;
