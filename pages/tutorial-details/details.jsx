import { useRouter } from "next/router";
import styles from "../../styles/TutorialDetails.module.scss";
import { Navbar } from "../../components/navbar/Navbar";
import data from "./data";

const TutorialDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);
  const tutorialContent = data.tutorialData.find((tuto) => tuto.id === id);

  return (
    <>
      <Navbar />
      <div className="parallax">
        <div className={styles.tutorialDetails}>
          <h2 className={styles.tutorialDetailsTitle}>
            {tutorialContent?.title}
          </h2>
          <div className={styles.tutorialDetailsContent}>
            <div className={styles.tutorialDetailsContentLines}>
              {tutorialContent?.content.map((contentLine, ind) => {
                if (contentLine.startsWith("p/")) {
                  return (
                    <p key={ind}>
                      {contentLine.substring(2, contentLine.length - 3)}
                    </p>
                  )
                } else if (contentLine.startsWith("h3/")) {
                  return (
                    <h3 key={ind}>
                      {contentLine.substring(3, contentLine.length - 3)}
                    </h3>
                  )
                }
                else if (contentLine.startsWith("img/")) {
                  return (
                    <img key={ind} src={`/images/${contentLine.substring(4, contentLine.length - 4)}`} width="90%" />
                  )
                }
              }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TutorialDetails;
