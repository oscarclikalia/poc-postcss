import { ReactNode } from "react";
import styles from "./parent-component.module.css";

type ParentComponentProps = {
  children: ReactNode;
};

export const ParentComponent = ({ children }: ParentComponentProps) => {
  return (
    <div className={styles.container}>
      ParentComponent div con clase container y estilos provenientes del archivo
      parent-component.module.css
      {children}
    </div>
  );
};
