import {TextField, withStyles} from "@material-ui/core";


const BorderlessTextField = withStyles((theme) => ({
    root: {
        border: 'none',
    },
}))(TextField);

export default BorderlessTextField;