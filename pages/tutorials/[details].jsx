import { useRouter } from "next/router";

const TutorialDetails = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>
        TutorialDetails
      </h1>
    </div>
  )
}

export default TutorialDetails;
