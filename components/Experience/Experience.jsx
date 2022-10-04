import styles from '../../styles/Experience.module.scss';

export const Experience = () => (
  <div className={styles.experience}>
    <h2>
      Projects
    </h2>
    <h4>
      MLREEF
    </h4>
    <a href="https://www.mlreef.com/" target="_blank" rel="noopener noreferrer">
      <img src="/images/mlreef1.png" width="60vw" />
    </a>
    <a href="https://about.mlreef.com/" target="_blank" rel="noopener noreferrer" style={{ marginTop: "2rem" }}>
      <img src="/images/mlreef2.png" width="60vw" />
    </a>
  </div>
);
