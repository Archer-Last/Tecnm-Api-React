import React from 'react'
import Ratio from 'react-bootstrap/Ratio';

const DocumentoB = (props) => {

    const { documento, id } = props;
    const style = documento.estatusrequisito.nombre + " thumb-container";
    return (
        
        documento.ruta === ""
        ? <div></div> 
        :<div className={style}>
            <div className="number"><small>#0{id + 1}</small></div>
            {/* <iframe class="embed-responsive-item" src={"http://127.0.0.1:80/media/"+documento.ruta+"/"}></iframe> */}
            <div style={{ width:300, height: 'auto' }}>
                <Ratio aspectRatio="1x1">
                    <embed type="image/svg+xml"  src={"http://127.0.0.1:8000/media/"+documento.ruta+"/"} />
                </Ratio>
            </div>
            
            <div className="detail-wrapper">
                
                <a href={"http://127.0.0.1:8000/media/"+documento.ruta+"/"}><small>{documento.documento.nombre}
                </small> </a>
                <button className="button-pokemon"> <h3>{documento.estatusrequisito.nombre}</h3> </button>
            </div>
        </div>
    )
}

export default DocumentoB