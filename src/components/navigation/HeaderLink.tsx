import {Link, LinkProps} from "react-router-dom";
import React from "react";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        textDecoration: 'none',
        marginLeft: 20,
        transition: 'opacity 0.5s ease',
        '&:hover': {
            opacity: 0.7
        }
    }
}));

export const HeaderLink: React.FC<LinkProps & { color?: string }>
    = (props) => {
    const classes = useStyles();
    return (
        <Link {...props} className={classes.root} style={{color: props.color, ...props.style}}/>
    )
}

export default HeaderLink;