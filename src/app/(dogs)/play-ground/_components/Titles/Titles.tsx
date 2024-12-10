import React from "react";

export const Titles = () => {
  return (
    <>
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
    </>
  );
};
