import React from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'Identificador', width: 90 },
  {
    field: 'nombre',
    headerName: 'Documento',
    width: 350,
    editable: true,
  },
  {
    field: 'tamaño',
    headerName: 'MG',
    width: 150,
    editable: true,
  },
  {
    field: 'descripcion',
    headerName: 'Caracteristicas',
    type: 'number',
    width: 400,
    editable: true,
  },
  {
    field: 'requisito',
    headerName: 'Requisito',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 300,
    valueGetter: (params) =>
      `${params.row.requisito.nombre || ''} `,
  },
];


const DataGrids = (props) => {
    const {Data, Columns,css_styles } = props
    return (
        <Box sx={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={Data}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    )
}

export default DataGrids