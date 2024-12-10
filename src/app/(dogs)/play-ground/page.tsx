import { Buttons } from "./_components/Buttons/Buttons";
import { ChildComponent } from "./_components/ChildComponent/ChildComponent";
import { ParentComponent } from "./_components/ParentComponent/ParentComponent";
import { RandonDog } from "./_components/RandonDog/RandonDog";
import { Titles } from "./_components/Titles/Titles";
import styles from "./play-ground.module.css";

export default function PlayGroundPage() {
  return (
    <div>
      <p>
        No hay conflictividad de clases entre compomentes padres e hijos. Ambos
        containers tienen una clase container
      </p>
      <ParentComponent>
        <ChildComponent />
      </ParentComponent>
      <div className="container">
        PlayGroundPage div con estilos provenientes del archivo globals.css
      </div>
      <div className={styles.container}>
        <div className={`${styles.container} ${styles.column}`}>
          <Titles />
          <Buttons />
        </div>
        <RandonDog />
      </div>
    </div>
  );
}
