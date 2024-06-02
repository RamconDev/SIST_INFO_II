import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    IconButton
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { SupplierStatus } from "../utils/status";

import Info from "./Info";


const InfoSupplier = (props) =>{

    const {info, isOpen, handleClose, locationList} = props

    return(
        <Dialog
                onClose={handleClose}
                open={isOpen}
                sx={{ padding: '10px ' }}>
                <DialogTitle sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant='p' sx={{ fontWeight: 'bold' }} >
                        Información del proveedor

                    </Typography>

                    <IconButton aria-label="close" onClick={handleClose} sx={{ marginLeft: '8px' }}>
                        <CloseIcon />
                    </IconButton>

                </DialogTitle>
                <DialogContent>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Info name="Nombre" value={info.name} />
                        <Info name="Locación" value={locationList[info.location]} />
                        <Info name="Telefono" value={info.telephone} />
                    </div>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Info name="Dirreción" value={info.address} />
                        <Info name="E-mail" value={info.email} />
                        <Info name="Status" value={SupplierStatus[info.status].name} />
                    </div>
                </DialogContent>
            </Dialog>
    )

}

export default InfoSupplier