import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import Info from "./Info";


const InfoClient = (props) =>{

    const {info, isOpen, handleClose, locationList} = props

    return(
        <Dialog
                onClose={handleClose}
                open={isOpen}
                sx={{ padding: '10px ' }}>
                <DialogTitle sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant='p' sx={{ fontWeight: 'bold' }} >
                        Información del cliente

                    </Typography>

                    <IconButton aria-label="close" onClick={handleClose} sx={{ marginLeft: '8px' }}>
                        <CloseIcon />
                    </IconButton>

                </DialogTitle>
                <DialogContent>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Info name="Rif" value={info.rif} />
                        <Info name="Nombre" value={info.name} />
                    </div>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Info name="Locación" value={locationList[info.location]} />
                        <Info name="Telefono" value={info.telephone} />
                    </div>

                </DialogContent>
            </Dialog>
    )

}

export default InfoClient