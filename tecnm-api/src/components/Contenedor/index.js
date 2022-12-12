import React from "react";
import DocumentoA from "../DocumentoA";
import DocumentoB from "../DocumentoB";

const Contenedor = (props) => {
  const { Documentos, css_styles } = props
  return (

    <div>
      {
        css_styles === 'pokedex-grid'
          ? <div className={`${css_styles}`}>
            {Documentos.map((documento, index) => {
              return <DocumentoA documento={documento} id={index} key={index} />;
            })}
          </div>
          : <div className={`${css_styles}`}>
            {Documentos.map((documento, index) => {
              return <DocumentoB documento={documento} id={index} key={index} />;
            })}
          </div>
      }

    </div>

    )
}

export default Contenedor