import { TextRenderer } from "../../components/textRenderer/TextRenderer";

const TutorialCard = (props) => {
  const {
    title,
    description,
    image
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <img src={image} alt="" />
      <TextRenderer text="Learn how you can refactor a React component or a whole view, 
        in order to improve readability and manage state in a more professional way" />
    </div>
  )  
}

export default TutorialCard;
