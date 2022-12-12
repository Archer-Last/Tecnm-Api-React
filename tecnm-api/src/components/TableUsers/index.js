import React from "react";

import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const TableUsers = (props) => {
    const {datas,heads,name,id,css_styles } = props

    return(
        <div>
            <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
            {
                heads.map((head,index) => (<th key={index} scope='col'>{head}</th>))
            }
        </tr>
      </MDBTableHead>
      <MDBTableBody>

        {
            datas.map((data,index)=> (
                <tr>
                    <td>
                        <p>{index + 1}</p>
                    </td>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>{data.nombre} {data.apellidopaterno} {data.apellidomaterno}</p>
                                <p className='text-muted mb-0'>{data.email}</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='fw-normal mb-1'>{data.NumeroControl}</p>
                        <p className='text-muted mb-0'>{data.alumnosemestre.semestre}</p>
                    </td>
                    <td>
                    <p className='text-muted mb-0'>{data.periodo.periodo}</p>
                        {/* <MDBBadge color='success' pill>
                            Active
                        </MDBBadge> */}
                    </td>
                    <td>{data.curp}</td>
                    <td>
                        {/* <MDBBtn color='link' rounded size='sm'>
                            Edit
                        </MDBBtn> */}

                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>

                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                    </td>
                </tr>
            ))
        }
        
        
      </MDBTableBody>
    </MDBTable>
        </div>
    )
}

export default TableUsers