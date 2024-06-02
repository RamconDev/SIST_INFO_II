import { Typography, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import TableRol from '../Components/TableRole';
import AddButton from '../Components/AddButton';
import AddRol from '../Components/AddRol';
import InfoRol from '../Components/InfoRol';
import EditRol from '../Components/EditRol';

function createData(opeType, rol, departament, c, u, r, d) {
    return { opeType, rol, departament, c, u, r, d };
}

const initial_state = createData("","","",false,false,false,false)

const Roles = () => {

    const [listRol, setListRol] = useState([]);
    const [selectInfo, setSelectInfo] = useState(initial_state)
    const [add, setAdd] = useState(false);
    const [view, setView] = useState(false);
    const [edit, setEdit] = useState(false);
    const [typesOperator, setTypesOperator] = useState([]);
    const [departamentsList, setDepartamentsList] = useState([]);

    const openView = (index) => {
        const info = listRol[index]
        setSelectInfo(info)

        setView(true);
    }

    const closeView = () => {
        setView(false);
    };

    const openEdit = (index) => {
        const info = listRol[index]
        setSelectInfo(info)

        setEdit(true)
    }

    const closeEdit = () => {
        setEdit(false)
    }

    const openAdd = () =>{
        setAdd(true)
    }

    const closeAdd = () =>{
        setAdd(false)
    }

    const addElement = (data)=>{
        const newList = listRol
        newList.push(data)
        setListRol(newList)
        setAdd(false)
    }

    const updateRecord = (data)=>{
        const newList = listRol.map((obj) =>{
            return obj.rif === selectInfo.rif?  data: obj;
        })
        setListRol(newList)
        setEdit(false)
    }

    useEffect(() => {

        setDepartamentsList(["ADMINISTRACION", "COMPRAS", "VENTAS"])
        setTypesOperator(["OPERATOR", "OPERATOR - COM", "SUPERV - COM", "SUPERV - ADMIN"])
    },[])

    return (
        <Box sx={{ width: '100%' }}>

            <Typography
                component="h1"
                sx={{ fontWeight: 'bold', fontSize: '32px', paddingBottom: '50px' }}
            >
                Roles
            </Typography>
            <AddButton action={openAdd} >Agregar rol</AddButton>
            <AddRol addElement={addElement} isOpen={add} handleClose={closeAdd} typesOperator={typesOperator} departamentsList={departamentsList} />
            <TableRol listRol={listRol} openView={openView} openEdit={openEdit} />
            <InfoRol info={selectInfo} isOpen={view} handleClose={closeView} />
            <EditRol updateList={updateRecord} isOpen={edit} handleClose={closeEdit} typesOperator={typesOperator} departamentsList={departamentsList} />
        </Box>
    );
}

export default Roles