import styles from '../../styles/IntroToMe.module.scss';


export const Avatar = () => (
  <div className={styles.introToMe}>
    <div className={styles.introToMeProfilePicture}>
      <img src="/images/profile_pic.jpeg" alt="" />
    </div>
  </div>
);

export const Head = () => (
  <>
    <Avatar />
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: "2rem" }}>
      <a href="https://www.instagram.com/andres_amos/" target="_blank" rel="noopener noreferrer">
        <img src="/images/instagramIC.png" alt="" width={50} />
      </a>
      <a href="https://github.com/AndresAusecha" target="_blank" rel="noopener noreferrer">
        <img src="/images/github.png" alt="" width={50} />
      </a>
      <a href="https://www.linkedin.com/in/aam8593/" target="_blank" rel="noopener noreferrer">
        <img src="/images/linkedinIC.png" alt="" width={45} />
      </a>
    </div>
  </>
);