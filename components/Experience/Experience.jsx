import styles from '../../styles/Experience.module.scss';
import { TextRenderer } from '../textRenderer/TextRenderer';

export const Experience = () => (
  <div className={styles.experience}>
    <h2 style={{ textAlign: "center" }}>
      Companies I have worked with
    </h2>
     <h4>
      PARKMOBILE
    </h4>
    <TextRenderer 
      text="In this company my role as Senior backend developer is focused on the development and maintenance of integrations with partners in the domain of telematics and tolling.
      The main technologies used are Java/Kotlin with Spring Boot framework, working in a microservices architecture deployed in AWS."
    />
    <a href="https://parkmobile.io/" target="_blank" rel="noopener noreferrer">
      <img src="/images/parkmobile.jpg" width="60vw" />
    </a>
    <h4>
      GREENLIGHT
    </h4>
    <TextRenderer 
      text="This company has multiple product offerings in the financial sector, as backend developer, my main responsability was 
      to add and maintain functionality in the existing microservices using Java/Kotlin with Spring Boot framework, also collaborated with the E2E tesing using technologies like Cypress and Kotest."
    />
    <a href="https://greenlight.com/" target="_blank" rel="noopener noreferrer">
      <img src="/images/greenlight.webp" width="60vw" />
    </a>
    <h4>
      MLREEF
    </h4>
    <TextRenderer 
      text="In this company we develop a platform for machine learning development, as a fulstack developer, 
      my responsability consists to create, maintain and test the frontend implementation, as well as collaborate 
      in the backend side and insfrastructure time to time."
    />
    <a href="https://www.mlreef.com/" target="_blank" rel="noopener noreferrer">
      <img src="/images/mlreef1.png" width="60vw" />
    </a>
    <a href="https://about.mlreef.com/" target="_blank" rel="noopener noreferrer" style={{ margin: "2rem 0" }}>
      <img src="/images/mlreef2.png" width="60vw" />
    </a>
  </div>
);
