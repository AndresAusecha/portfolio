import Link from 'next/link';
import styles from '../../styles/TutorialsCard.module.scss';

const TutorialCard = (props) => {
  const {
    image,
    title,
    description,
    tutorialId
  } = props;
  return (
    <Link href={`/tutorial-details?id=${tutorialId}`}>
      <div className={styles.tutorialsCard}>
        <div className={styles.tutorialsCardTop}>
          <img className={styles.tutorialsCardTopIc} src={image} alt="" />
          <h4 className={styles.tutorialsCardTopTitle} style={{ color: "white" }}>
            {title}
          </h4>
        </div>
        <p style={{ color: "white" }}>{description}</p>
      </div>
    </Link>
  )
}

export default TutorialCard;
