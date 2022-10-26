import { useRouter } from "next/router";
import { tutorialData } from "./data";

const TutorialDetails = () => {
  const router = useRouter();
  const { details } = router.query;
  const tutorialContent = tutorialData.find((tuto) => tuto.id === details);
  return (
    <div>
      <h2>
        {tutorialContent.title}
      </h2>
      <div>
        {tutorialContent.content.map((contentLine, ind) => {
          if (contentLine.startsWith("p/")) {
            return (
              <p key={ind}>
                {contentLine.substring(2, contentLine.length - 3)}
              </p>
            )
          } else  if (contentLine.startsWith("h3/")) {
            return (
              <h3 key={ind}>
                {contentLine.substring(3, contentLine.length - 3)}
              </h3>
            )
          }
          else  if (contentLine.startsWith("img/")) {
            return (
              <img key={ind} src={`/images/${contentLine.substring(3, contentLine.length - 3)}`} />
            )
          }
        }
        )}
      </div>
    </div>
  )
}

export default TutorialDetails;
