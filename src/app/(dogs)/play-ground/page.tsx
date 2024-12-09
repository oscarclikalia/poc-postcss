import { ChildComponent } from "./_components/ChildComponent/ChildComponent";
import { ParentComponent } from "./_components/ParentComponent/ParentComponent";
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
        <button className="button button--primary">Botón Primario</button>
        <button className="button button--secondary">Botón Secundario</button>
        <button className="button button--outline">Outline Botón</button>
        <button className="button button--fullfill">Fullfill Boton</button>
        <button className="button button--primary" disabled>
          Botón deshabilitado
        </button>
      </div>
      <div className={styles.container}>
        <h1 className="typography typography--heading typography--heading--1">
          Titulo 1
        </h1>
        <h2 className="typography typography--heading typography--heading--2">
          Titulo 2
        </h2>
        <h3 className="typography typography--heading typography--heading--3">
          Titulo 3
        </h3>

        <p className="typography typography--body">Texto normal.</p>
        <p className="typography typography--body typography--body--large">
          Texto largo.
        </p>
        <p className="typography typography--body typography--body--small">
          Texto pequeño.
        </p>

        <span className="typography typography--special">Texto especial</span>
        <span className="typography typography--special typography--special--highlight">
          Texto especial destacado
        </span>
      </div>
    </div>
  );
}
