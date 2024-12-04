import { ReactNode } from "react";
import styles from "./parent-component.module.css";

type ParentComponentProps = {
  children: ReactNode;
};

export const ParentComponent = ({ children }: ParentComponentProps) => {
  return (
    <div className={styles.container}>
      ParentComponent
      {children}
    </div>
  );
};
