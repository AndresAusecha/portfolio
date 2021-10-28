import styles from '../../styles/IntroToMe.module.scss'

export const Avatar = () => (
  <div className={styles.introToMe}>
    <div className={styles.introToMeProfilePicture}>
      <img src="/images/profile_pic.jpeg" alt="" />
    </div>
  </div>
);