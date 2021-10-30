import styles from '../../styles/TextRenderer.module.scss'

export const TextRenderer = ({ text }) => (
  <div className={styles.aboutme}>
    <p>
      {text}
    </p>
  </div>
);