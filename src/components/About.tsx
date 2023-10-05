import styles from "./profile.module.css";

export const About = () => {
  return (
    <>
      <div className={styles.description}>
        <div>
          I'm a front-end developer with a passion for building web experiences
          that are both beautiful and user-friendly. I'm a code geek at heart,
          but I also have a strong eye for design and I'm always looking for new
          ways to push the boundaries of what's possible on the web. In my
          previous role, I worked on a variety of projects, from small business
          websites to large-scale e-commerce applications. I've had the pleasure
          of working with some of the biggest brands in the world, and I've
          learned a lot along the way. I'm always up for a challenge, and I'm
          always looking for new ways to learn and grow. If you have a project
          that you think would be a good fit for my skills, please don't
          hesitate to contact me.
        </div>
      </div>
      <div className={styles.skillsSection}>
        <div>skills</div>
      </div>
    </>
  );
};
