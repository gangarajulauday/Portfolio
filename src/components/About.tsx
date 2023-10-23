import styles from "./profile.module.css";

export const About = () => {
  const skillItems = [
    { label: "HTML" },
    { label: "CSS" },
    { label: "AngularJS" },
    { label: "ReactJS" },
    { label: "SAAS" },
    { label: "JAVA" },
    { label: "Bootstrap" },
    { label: "Javascript" },
    { label: "TestTet" },
    { label: "Tet" },
  ];
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
        <div className="container">
          <div className="row g-2">
            <div className={`col ${styles.skillSetBlock}`}>
              <h2>Get to Know Me</h2>
              <div className={styles.skillPills}>I have a Master's degree in Computer Science. Currently working as a FrontEnd Developer. When I'm not working or coding, I explore the world of video games.</div>
              <div>
                <button type="button" className="btn btn-primary">
                  Contact Me
                </button>
              </div>
            </div>

            <div className={`col ${styles.skillSetBlock}`}>
              <h2>My Skills</h2>
              <div className={styles.skillPills}>
                {skillItems.map((obj) => {
                  return <span className={styles.skillBadge}>{obj.label}</span>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
