import { Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';


const OKButton = (props) => {
    const { action, children } = props;

    return (
        <Button
            variant="contained"
            onClick={action}
            startIcon={<CheckIcon sx={{ color: "white" }} />}
            color="success"
        >

            {children}
        </Button>
    )

}

export default OKButton;