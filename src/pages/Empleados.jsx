import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import TableEmployers from '../Components/TableEmployers';
import InfoEmployer from '../Components/InfoEmployer';
import EditEmployer from '../Components/EditEmployer';
import AddButton from '../Components/AddButton';
import AddEmployer from '../Components/AddEmployer';

function createData(numId, name, lastname, email, rol, date, status) {
    return { numId, name,lastname, email, rol, date, status };
}

const initial_state = createData("","","","","","",0)

const Empleados = () => {

    
    const [listEmployers, setListEmployers] = useState([])
    const [selectInfo, setSelectInfo] = useState(initial_state)
    const [view, setView] = useState(false);
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);
    const [rolList, setRolList] = useState([]);
    const [locationList, setLocationList] = useState([]);

    const openView = (index) => {
        
        const info = listEmployers[index]
        setSelectInfo(info)

        setView(true);
    }

    const closeView = () => {
        setView(false);
    };

    const openEdit = (index) => {
        const info = listEmployers[index]
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

    const updateRecord = (data)=>{
        const newList = listEmployers.map((obj) =>{
            return obj.numId === selectInfo.numId?  data: obj;
        })
        setListEmployers(newList)
        setEdit(false)
    }

    const addElement = (data)=>{
        const newList = listEmployers
        newList.push(data)
        setListEmployers(newList)
        setAdd(false)
    }

    useEffect(() => {
        setRolList(["Rol1", "Rol2", "Rol3"])
        setLocationList(["Location1", "Location2", "Location3"])
    }, [])

    return (
        <Box sx={{ width: '100%' }}>

            <Typography
                component="h1"
                sx={{ fontWeight: 'bold', fontSize: '32px', paddingBottom: '50px' }}
            >
                Empleados
            </Typography>
            <AddButton action={openAdd} >Agregar Empleado</AddButton>
            <AddEmployer addElement={addElement} isOpen={add} handleClose={closeAdd} rolList={rolList} locationList={locationList} />
            <TableEmployers listEmployers={listEmployers} openView={openView} openEdit={openEdit} />
            <InfoEmployer info={selectInfo} isOpen={view} handleClose={closeView} />

            <EditEmployer updateList={updateRecord} isOpen={edit} handleClose={closeEdit} rolList={rolList} locationList={locationList} />
        </Box>
    );
}

export default Empleados