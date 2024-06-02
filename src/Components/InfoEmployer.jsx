import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import Info from "./Info";
import { employerStatus } from "../utils/status";

const InfoEmployer = (props) => {

    const { info, isOpen, handleClose } = props

    return (
        <Dialog
            onClose={handleClose}
            open={isOpen}
            sx={{ padding: '10px ' }}>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='p' sx={{ fontWeight: 'bold' }} >
                    Información del empleado

                </Typography>

                <IconButton aria-label="close" onClick={handleClose} sx={{ marginLeft: '8px' }}>
                    <CloseIcon />
                </IconButton>

            </DialogTitle>
            <DialogContent>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Info name="numId" value={info.numId} />
                    <Info name="Nombre" value={info.name + " " + info.lastname} />
                    <Info name="Status" value={<Typography variant='p' sx={employerStatus[info.status].sx}>
                        {employerStatus[info.status].name}
                    </Typography>} />
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Info name="Correo" value={info.email} />
                    <Info name="Fecha" value={info.date} />
                    <Info name="Rol" value={info.rol} />
                </div>

            </DialogContent>
        </Dialog>
    )

}

export default InfoEmployer