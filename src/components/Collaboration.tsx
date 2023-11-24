import styles from "./collaboration.module.css";
export const Collaboration = () => {
  const companies = [
    { name: "Test", icon: "" },
    { name: "Test", icon: "" },
    { name: "Test", icon: "" },
    { name: "Test", icon: "" },
    { name: "Test", icon: "" },
    { name: "Test", icon: "" },
    { name: "Test", icon: "" },
    { name: "Test", icon: "" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        I'm proud to have collaborated with some awesome companies:
      </div>
      <div className={styles.companies}>
        {companies.map((obj) => {
          return <div>{obj.name}</div>;
        })}
      </div>
    </div>
  );
};
