import {TextField, withStyles} from "@material-ui/core";


const RoundTextField = withStyles((theme) => ({
    root: {
        borderRadius: 26,
        position: 'relative',
        border: '1px solid #ced4da',
        fontSize: 14,
        width: '100%',
        padding: '0 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '& > input': {
            padding: '8px 0 8px'
        },
    },
}))(TextField);

export default RoundTextField;