import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
    Typography
} from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { employerStatus } from '../utils/status';

const TableEmployers = (props) =>{

    const { openView, openEdit, listEmployers } = props;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return(
        <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer component={Paper}>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size='small'
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Numero identificación</TableCell>
                                <TableCell align="center">Nombre</TableCell>
                                <TableCell align="center">Correo</TableCell>
                                <TableCell align="center">Rol</TableCell>
                                <TableCell align="center">Fecha</TableCell>
                                <TableCell align="center">Estado</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listEmployers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{row.numId}</TableCell>
                                    <TableCell align="center">{row.name + " " + row.lastname}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">{row.rol}</TableCell>
                                    <TableCell align="center">{row.date}</TableCell>
                                    <TableCell align="center">
                                        <Typography variant='p' sx={employerStatus[row.status].sx}>
                                            {employerStatus[row.status].name}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => openView(index)}>
                                            <VisibilityIcon id={index} sx={{ color: "black" }} />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => openEdit(index)}>
                                            <EditIcon sx={{ color: "black" }} />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer >
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={listEmployers.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
    )

}

export default TableEmployers