import styles from "./child-component.module.css";

export const ChildComponent = () => {
  return (
    <div className={styles.container}>
      ChildComponent div con clase container y estilos provenientes del archivo
      child-component.module.css
    </div>
  );
};
