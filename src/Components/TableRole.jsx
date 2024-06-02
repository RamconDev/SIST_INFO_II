import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination
} from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

import { useState } from 'react';


const TableRol = (props) => {

    const { openView, openEdit, listRol } = props;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (

        <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size='small'
                >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Tipo de operador</TableCell>
                            <TableCell align="center">Rol</TableCell>
                            <TableCell align="center">Departmento</TableCell>
                            <TableCell align="center">C</TableCell>
                            <TableCell align="center">U</TableCell>
                            <TableCell align="center">R</TableCell>
                            <TableCell align="center">D</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listRol.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{row.opeType}</TableCell>
                                <TableCell align="center">{row.rol}</TableCell>
                                <TableCell align="center">{row.departament}</TableCell>
                                <TableCell align="center">{row.c ? <CheckIcon sx={{ color: "green" }} /> : ' '}</TableCell>
                                <TableCell align="center">{row.u ? <CheckIcon sx={{ color: "green" }} /> : ' '}</TableCell>
                                <TableCell align="center">{row.r ? <CheckIcon sx={{ color: "green" }} /> : ' '}</TableCell>
                                <TableCell align="center">{row.d ? <CheckIcon sx={{ color: "green" }} /> : ' '}</TableCell>

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
                count={listRol.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )

}

export default TableRol