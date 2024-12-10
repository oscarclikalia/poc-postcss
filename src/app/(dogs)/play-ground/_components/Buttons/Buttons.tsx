import React from "react";

export const Buttons = () => {
  return (
    <>
      <button className="button button--primary">Botón Primario</button>
      <button className="button button--secondary">Botón Secundario</button>
      <button className="button button--outline">Outline Botón</button>
      <button className="button button--fullfill">Fullfill Boton</button>
      <button className="button button--primary" disabled>
        Botón deshabilitado
      </button>
    </>
  );
};
