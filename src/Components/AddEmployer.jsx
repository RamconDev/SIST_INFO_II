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
import { employerStatus } from "../utils/status";

const AddEmployer = (props) => {

    const initial = {
        typeId: "V",
        numId: "",
        name: "",
        lastname:"",
        email: "",
        telephone: "",
        location: 0,
        rol: 0,
        status: 0
    }

    const { addElement, isOpen, handleClose, rolList, locationList } = props
    const [form, handleChange, reset] = useForm(initial)


    const save = () => {

        const noewTime = Date.now();
        const today = new Date(noewTime);


        addElement({
            numId: form.typeId + "-" + form.numId,
            name: form.name,
            lastname: form.lastname,
            email: form.email,
            telephone: form.telephone,
            location: form.location,
            date: today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear(),
            rol: rolList[form.rol],
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
                    name="lastname"
                    label="Apellido"
                    variant="filled"
                    sx={{ marginBottom: "20px", width: "100%" }}
                    value={form.lastname}
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

                <br />

                <FormControl sx={{ marginBottom: "20px", width: "100%" }}>
                    <InputLabel>Rol</InputLabel>
                    <Select
                        name="rol"
                        value={form.rol}
                        label="Status"
                        onChange={handleChange}
                    >
                        {
                            rolList.map((name, index) => (
                                <MenuItem value={index} key={index}>{name}</MenuItem>
                            ))}
                    </Select>
                </FormControl>

                <FormControl  sx={{  width: "100%" }}>
                    <InputLabel>Status</InputLabel>
                    <Select
                        name="status"
                        value={form.status}
                        label="Status"
                        onChange={handleChange}
                    >
                        {employerStatus.map((obj, index)=>(
                            <MenuItem key={index} value={index}>{obj.name}</MenuItem>
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

export default AddEmployer