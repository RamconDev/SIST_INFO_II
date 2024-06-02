
import {Box, Typography} from '@mui/material';
import { useState, useEffect } from 'react';
import AddSupplier from '../Components/AddSupplier';
import TableSuppliers from '../Components/TableSuppliers';
import AddButton from '../Components/AddButton';
import InfoSupplier from '../Components/InfoSupplier';

function createData(name, address, telephone, email, location, status) {
    return { name, address, telephone, email, location, status };
}

const initial_state = createData("","","","",0,0)

const Proveedores = () => {


    const [listClients, setListClients] = useState([]);
    const [selectInfo, setSelectInfo] = useState(initial_state)
    const [view, setView] = useState(false);
    const [add, setAdd] = useState(false);
    const [locationList, setLocationList] = useState([]);
    

    const openView = (index) => {
        
        const info = listClients[index]
        setSelectInfo(info)

        setView(true);
    }

    const closeView = () => {
        setView(false);
    };

    const openAdd = () =>{
        setAdd(true)
    }

    const closeAdd = () =>{
        setAdd(false)
    }

    const addElement = (data)=>{
        const newList = listClients
        newList.push(data)
        setListClients(newList)
        setAdd(false)
    }


    useEffect(() => {

        setLocationList(["Location1", "Location2", "Location3"])
    }, [])

    return (
        <Box sx={{ width: '100%' }}>
            
            <Typography
                component="h1"
                sx={{ fontWeight: 'bold', fontSize: '32px', marginBottom: '20px' }}
            >
                Proveedores
            </Typography>
            <AddButton action={openAdd} >Agregar Proveedor</AddButton>
            <AddSupplier addElement={addElement} isOpen={add} handleClose={closeAdd} locationList={locationList} />

            <TableSuppliers openView={openView} listClients={listClients} locationList={locationList} />
            <InfoSupplier info={selectInfo} isOpen={view} handleClose={closeView} locationList={locationList} />
        </Box>
    );
}

export default Proveedores