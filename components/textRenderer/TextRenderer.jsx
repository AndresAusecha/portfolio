import styles from '../../styles/TextRenderer.module.scss'

export const TextRenderer = ({ text }) => (
  <div className={styles.textRenderer}>
    <p>
      {text}
    </p>
  </div>
);