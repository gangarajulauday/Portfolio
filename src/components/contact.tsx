import styles from "./contact.module.css";
import logo from './U.png'
export const Contact = () => {
  return (
    <>
      <div className={` ${styles.contactBlock}`}>
        <div className={styles.contactInfo}>
          <div>
            
            <img className={styles.image} src={logo} />
          </div>
          <div className={styles.contactQuote}>
            Living, learning, & leveling up one day at a time.
          </div>
          <div className={styles.contactIcons}>
            <span>icon1 </span>
            <span>icon2 </span>
            <span>icon3 </span>
            <span>icon4 </span>
          </div>
          <div>Handcrafted by me</div>
        </div>
      </div>
      <div className={` ${styles.startProject}`}>
        <div className={styles.startProjectItems}>
          <div>Want to work on a Project</div>
          <div>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</div>
          <div>
            <button type="button" className="btn btn-outline-primary">
              Hit me!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
