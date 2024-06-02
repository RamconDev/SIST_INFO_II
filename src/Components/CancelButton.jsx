import { Button } from '@mui/material';


const CancelButton = (props) => {
    const { action, children } = props;

    return (
        <Button
            variant="outlined"
            onClick={action}
            color="error"
        >

            {children}
        </Button>
    )

}

export default CancelButton;