import { About } from "./About";
import styles from "./profile.module.css";
import personlogo from './my-avatar.svg'
import contentlogo from './hero-devices.svg'

export const Profile = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.title}>Hi, My Name is Uday Gangarajula</div>
        <div className={styles.subTitle}>I'm a Frontend developer, I code and design things and I'm Passionate about Programming. </div>
        <div><img className={styles.avatarSection}
                src={personlogo}
            /></div>
        <div><img className={styles.gadgetSection}
                src={contentlogo}
            /></div>
      </div>

      <About/>
    </>
  );
};
