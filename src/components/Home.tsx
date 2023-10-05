import { Header } from "./Header";
import { Profile } from "./Profile";
import styles from "./home.module.css";

export const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Profile />
    </div>
  );
};
