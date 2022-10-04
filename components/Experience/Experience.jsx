import styles from '../../styles/Experience.module.scss';
import { TextRenderer } from '../textRenderer/TextRenderer';

export const Experience = () => (
  <div className={styles.experience}>
    <h2>
      Projects
    </h2>
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
    <a href="https://about.mlreef.com/" target="_blank" rel="noopener noreferrer" style={{ marginTop: "2rem" }}>
      <img src="/images/mlreef2.png" width="60vw" />
    </a>
  </div>
);
