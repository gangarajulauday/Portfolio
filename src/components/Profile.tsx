import { About } from "./About";
import styles from "./profile.module.css";
import personlogo from './my-avatar.svg'
import contentlogo from './hero-devices.svg'
import person1logo from './AvatarMaker (1).png'
import person2logo from './Nerd-bro.png'
import { Contact } from "./contact";
import { Testimonials } from "./testimonials";

export const Profile = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.title}>Hi, My Name is Uday Gangarajula</div>
        <div className={styles.subTitle}>I'm a Frontend developer, I code and design things and I'm Passionate about Programming. </div>
        <div><img className={styles.avatarSection}
                src={person2logo}
            /></div>
        <div><img className={styles.gadgetSection}
                src={contentlogo}
            /></div>
      </div>

      <About/>
      <Testimonials/>
      {/* <Contact/> */}

      

      
      


    </>
  );
};
