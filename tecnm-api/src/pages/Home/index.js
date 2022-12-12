import React, {useState,useEffect} from "react";
import Text from "../../components/Text";
//import Button from "../../components/Button";
import useAPI from "../../hooks/useApi";
//import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Tables from "../../components/Tables";
import Tables2 from "../../components/Tables2";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Ratio from 'react-bootstrap/Ratio';
import Iframe from 'react-iframe';
import { useNavigate } from 'react-router-dom';
//import { MDBContainer, MDBIframe } from 'mdbreact';
import Contenedor from "../../components/Contenedor";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TableUsers from "../../components/TableUsers";
import DataGrids from "../../components/DataGrids";




const Home = () => {
  const navigate = useNavigate()
    const {getRequest} = useAPI()
    const [displayView, setDisplayView] = useState('view-A')
    const [Alumnos, setAlumnos] = useState([])
    const [ListAspirantes, setAspirantes] = useState([])
    const [ListaDocumentos,setDocumentos] = useState([])

    const LoadAlumnos = async() => {
        let response = await getRequest('http://127.0.0.1:8000/Alumnos/Alumno/')
        console.log('respuesta',response)
        setAlumnos(response)
    }


    const LoadDocumentos = async() => {
      let response = await getRequest('http://127.0.0.1:8000/Alumnos/detalledocumento/')
      console.log('respuesta2',response)
      setDocumentos(response)
  }

  const LoadAspirantes = async() => {
     let response = await getRequest('http://127.0.0.1:8000/Alumnos/documento/')
     setAspirantes(response)
  }

    const handleClick = () => {
        displayView === 'view-A'
        ? setDisplayView('view-B')
        : setDisplayView('view-A')
    }

    const handleClick2 = (link) => {
      console.log('Presionado')
        navigate(link)
  }


    
    useEffect(() => {
        LoadAlumnos()
        LoadDocumentos()
        LoadAspirantes()
      }, [])


     
    return (
        <div>
            <h1>Estoy en el home</h1>
            <Text css_styles='fs_16'/>
            <Text title='segundo text' css_styles='fs_16'/> 
            
            {/* <Button 
            id = 'change_view'
            name = 'change_view'
            value = 'Cambiar diseño'
            css_styles = 'fs_12'
            handleClick = {handleClick}
            /> 
            {/* <div style={{ width:400, height: 'auto' }}>
            {
              Documentos.map((Documento,index) => (
              
              <Ratio key={index} aspectRatio="1x1">
                <embed type="image/svg+xml"  src="https://www.youtube.com/watch?v=0dYp-uCVztI"  onClick={()=> handleClick2("127.0.0.1/media")} />
              </Ratio>
         
              ))   
            }
             </div>
<div class="embed-responsive embed-responsive-1by1">

                { 
                  Documentos.map((Documento,index)=> (
                   
                      <iframe key={index}  class="embed-responsive-item" src={"http://127.0.0.1:80/media/"+Documento.ruta+"/"}></iframe>
                    
                  ))
                }</div> */}
                {/* <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                  Documentos.map((Documento,index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <iframe key={index}  class="embed-responsive-item" src={"http://127.0.0.1:80/media/"+Documento.ruta+"/"}></iframe>
                  </Grid>
                  ))
                }
                </Grid>
                </Box>
              
            */}
          
            {/* <Contenedor Documentos={ListaDocumentos} css_styles='all-container' /> */}
            <Tables  
             id = 'change_view'
             name = 'change_view'
             value = 'Cambiar diseño'
             css_styles = 'fs_12'
             handleClick = {handleClick}
             rows = {Alumnos}
            />

            {/* <Tables2/>  */}

            {/* <TableUsers 
            datas={Alumnos}
            heads={["#","Nombre","N. Control / Semestre","Generacion","Curp","Accion"]}
            /> */}

           
          

           <DataGrids Data={ListAspirantes}/>

           
            
        </div>
    )
}

export default Home