import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Info from "./Info";


const InfoRol = (props) => {

    const { info, isOpen, handleClose } = props

    return (
        <Dialog
            onClose={handleClose}
            open={isOpen}
            sx={{ padding: '10px ' }}>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='p' sx={{ fontWeight: 'bold' }} >
                    Información del rol

                </Typography>

                <IconButton aria-label="close" onClick={handleClose} sx={{ marginLeft: '8px' }}>
                    <CloseIcon />
                </IconButton>

            </DialogTitle>
            <DialogContent>
                <Info name="Tipo de operador" value={info.opeType} />
                <br />
                <Info name="Rol" value={info.rol} />
                <br />
                <Info name="Departamento" value={info.departament} />
                <br />
                <Typography variant='h6' sx={{ fontWeight: 'bold' }} >
                    Permisos
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Info name="Crear" value={info.c?"Si":"No"} />
                    <Info name="Leer" value={info.r?"Si":"No"} />
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Info name="Actualizar" value={info.u?"Si":"No"} />
                    <Info name="Borrar" value={info.d?"Si":"No"} />
                </div>
                <br />
                
            </DialogContent>
        </Dialog>
    )

}

export default InfoRol