import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    IconButton,
    FormGroup,
    FormControlLabel,
    TextField,
    DialogActions,
    Checkbox,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import OKButton from "./OKButton";
import CancelButton from "./CancelButton";
import useForm from "../utils/useForm";

const EditRol = (props) => {

    const initial = {
        typeOperator: 0,
        rol: "",
        departament: 0,
        c: false,
        r: false,
        u: false,
        d: false,
    }


    const { updateList, isOpen, handleClose, typesOperator, departamentsList } = props
    const [form, handleChange, reset] = useForm(initial)
  
    const save = () => {

        updateList({
            opeType: typesOperator[form.typeOperator],
            rol: form.rol,
            departament: departamentsList[form.departament],
            c: form.c,
            r: form.r,
            u: form.u,
            d: form.d,

        })
        reset()
    }

    return (
        <Dialog
            component='form'
            onClose={handleClose}
            open={isOpen}
            sx={{ padding: '10px ' }}>

            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant='p' sx={{ fontWeight: 'bold' }} >
                    Editar Rol
                </Typography>

                <IconButton aria-label="close" onClick={handleClose} sx={{ marginLeft: '8px' }}>
                    <CloseIcon />
                </IconButton>

            </DialogTitle>
            <DialogContent>
                <FormControl sx={{ marginBottom: "20px", width: "100%", marginTop: "20px" }}>
                    <InputLabel>Tipo de Operador</InputLabel>
                    <Select
                        name="typeOperator"
                        value={form.typeOperator}
                        label="Tipo de Operador"
                        onChange={handleChange}
                    >
                        {typesOperator.map((name, index) => (
                            <MenuItem key={index} value={index}>{name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <br />

                <TextField
                    name="rol"
                    label="Rol"
                    variant="filled"
                    sx={{ marginBottom: "20px", width: "100%" }}
                    value={form.rol}
                    onChange={handleChange}
                />
                <br />

                <FormControl sx={{ marginBottom: "20px", width: "100%" }}>
                    <InputLabel>Departamento</InputLabel>
                    <Select
                        name="departament"
                        value={form.departament}
                        label="Departamento"
                        onChange={handleChange}
                    >
                        {departamentsList.map((name, index) => (
                            <MenuItem key={index} value={index}>{name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <br />


                <FormGroup>
                    <FormControlLabel label="Crear" control={<Checkbox size="small" checked={form.c.checked} onChange={handleChange} name="c" />} />
                    <FormControlLabel label="Actualizar" control={<Checkbox size="small" checked={form.u.checked} onChange={handleChange} name="u" />} />
                    <FormControlLabel label="Leer" control={<Checkbox size="small" checked={form.r.checked} onChange={handleChange} name="r" />} />
                    <FormControlLabel label="Borrar" control={<Checkbox size="small" checked={form.d.checked} onChange={handleChange} name="d" />} />
                </FormGroup>

            </DialogContent>
            <DialogActions>
                <OKButton action={save}>Guardar</OKButton>
                <CancelButton action={handleClose}>Cancelar</CancelButton>
            </DialogActions>
        </Dialog>
    )
}

export default EditRol