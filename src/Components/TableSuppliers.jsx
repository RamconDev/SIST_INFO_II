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
import { useState } from 'react';
import { SupplierStatus } from '../utils/status';


const TableSuppliers = (props) => {

    const { openView, listClients, locationList } = props;
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
                            <TableCell align="center">Nombre</TableCell>
                            <TableCell align="center">Locación</TableCell>
                            <TableCell align="center">Telefono</TableCell>
                            <TableCell align="center">Estado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listClients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{locationList[row.location]}</TableCell>
                                <TableCell align="center">{row.telephone}</TableCell>
                                <TableCell align="center">{SupplierStatus[row.status].name}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => openView(index)}>
                                        <VisibilityIcon id={index} sx={{ color: "black" }} />
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
                count={listClients.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

        </Paper>

    )
}

export default TableSuppliers