import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    IconButton,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    TextField,
    DialogActions,
    InputLabel,
    Select,
    MenuItem
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import OKButton from "./OKButton";
import CancelButton from "./CancelButton";
import useForm from "../utils/useForm";

const AddEmployer = (props) => {

    const initial = {
        typeId: "V",
        numId: "",
        name: "",
        email: "",
        telephone: "",
        address: "",
        rol: "",
        status: 0
    }

    const { addElement, isOpen, handleClose } = props
    const [form, handleChange, reset] = useForm(initial)

    const save = () => {

        const noewTime = Date.now();
        const today = new Date(noewTime);


        addElement({
            numId: form.typeId + "-" + form.numId,
            name: form.name,
            email: form.email,
            telephone: form.telephone,
            address: form.address,
            date: today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear(),
            rol: "falta fielld rol",
            status: form.status
        })
        reset()
    }

    return (
        <Dialog
            component='form'
            onClose={handleClose}
            open={isOpen}
            sx={{ padding: '10px ' }}>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='p' sx={{ fontWeight: 'bold' }} >
                    Agregar empleado
                </Typography>

                <IconButton aria-label="close" onClick={handleClose} sx={{ marginLeft: '8px' }}>
                    <CloseIcon />
                </IconButton>

            </DialogTitle>
            <DialogContent>

                <FormControl>
                    <RadioGroup
                        name="typeId"
                        value={form.typeId}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="V" control={<Radio size="small" />} label="V" />
                        <FormControlLabel value="J" control={<Radio size="small" />} label="J" />
                    </RadioGroup>
                </FormControl>

                <TextField
                    name="numId"
                    label="Rif/Cedula"
                    variant="filled"
                    sx={{ marginBottom: "20px" }}
                    value={form.numId}
                    onChange={handleChange}
                />
                <br />

                <TextField
                    name="name"
                    label="Nombre"
                    variant="filled"
                    sx={{ marginBottom: "20px", width: "100%" }}
                    value={form.name}
                    onChange={handleChange}
                />
                <br />

                <TextField
                    name="email"
                    label="Correo"
                    variant="filled"
                    sx={{ marginBottom: "20px", width: "100%" }}
                    value={form.email}
                    onChange={handleChange}
                />
                <br />

                <TextField
                    name="telephone"
                    label="Telefono"
                    variant="filled"
                    sx={{ marginBottom: "20px", width: "100%" }}
                    value={form.telephone}
                    onChange={handleChange}
                />
                <br />

                <TextField
                    name="address"
                    label="Dirección"
                    variant="filled"
                    sx={{ marginBottom: "20px", width: "100%" }}
                    value={form.address}
                    onChange={handleChange}
                />
                <br />

                <FormControl>
                    <InputLabel>Status</InputLabel>
                    <Select
                        name="status"
                        value={form.status}
                        label="Status"
                        onChange={handleChange}
                        sx={{ width: "100%" }}
                    >
                        <MenuItem value={0}>Disponible</MenuItem>
                        <MenuItem value={1}>Vacaciones</MenuItem>
                        <MenuItem value={2}>Ocupado</MenuItem>
                    </Select>
                </FormControl>

            </DialogContent>
            <DialogActions>
                <OKButton action={save}>Guardar</OKButton>
                <CancelButton action={handleClose}>Cancelar</CancelButton>
            </DialogActions>
        </Dialog>
    )

}

export default AddEmployer