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
import { SupplierStatus } from "../utils/status";

const AddSupplier = (props) => {

    const initial = {
        name: "",
        telephone: "",
        email: "",
        address: "",
        location: 0,
        status: 0
    }


    const { addElement, isOpen, handleClose, locationList } = props
    const [form, handleChange, reset] = useForm(initial)


    const save = () => {
        addElement({
            name: form.name,
            telephone: form.telephone,
            email: form.email,
            address: form.address,
            location: form.location,
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
                    Registrar proveedor
                </Typography>

                <IconButton aria-label="close" onClick={handleClose} sx={{ marginLeft: '8px' }}>
                    <CloseIcon />
                </IconButton>

            </DialogTitle>
            <DialogContent>

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
                    name="telephone"
                    label="Telefono"
                    variant="filled"
                    sx={{ marginBottom: "20px", width: "100%" }}
                    value={form.telephone}
                    onChange={handleChange}
                />
                <br />

                <TextField
                    name="email"
                    label="E-mail"
                    variant="filled"
                    sx={{ marginBottom: "20px", width: "100%" }}
                    value={form.email}
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


                <FormControl sx={{ marginBottom: "20px", width: "100%" }}>
                    <InputLabel>Locación</InputLabel>
                    <Select
                        name="location"
                        value={form.location}
                        label="Locación"
                        onChange={handleChange}
                    >
                        {
                            locationList.map((name, index) => (
                                <MenuItem value={index} key={index}>{name}</MenuItem>
                            ))}
                    </Select>
                </FormControl>

                <FormControl sx={{ marginBottom: "20px", width: "100%" }}>
                    <InputLabel>Status</InputLabel>
                    <Select
                        name="status"
                        value={form.status}
                        label="Status"
                        onChange={handleChange}
                    >
                        {
                            SupplierStatus.map((obj, index) => (
                                <MenuItem value={index} key={index}>{obj.name}</MenuItem>
                            ))}
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

export default AddSupplier