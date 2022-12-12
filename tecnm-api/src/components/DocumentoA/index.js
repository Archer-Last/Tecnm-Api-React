import React from "react";

const DocumentoA = (props) => {
  const { documento, id } = props;
//   const style = documento.Type + " pokemon-card";
  return (
    <div >
      <div className="pokemon-img-container">
        {/* <img
          src={documento.imgURL}
          alt={documento.nombre}
          className="pokemon-img"
        /> */}
        {
        documento.ruta === 'hola'
        ? <iframe class="embed-responsive-item" src={"http://127.0.0.1:8000/media/"+documento.ruta+"/"}></iframe>
        : <div></div>
        }
        
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{documento.documento.nombre}</h3>
          <div>#{id + 1}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            <p>{documento.estatusrequisito.nombre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentoA;