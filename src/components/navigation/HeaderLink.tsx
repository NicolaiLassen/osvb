import {Link, LinkProps} from "react-router-dom";
import React from "react";
import {makeStyles} from "@material-ui/core";
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    root: {
        textDecoration: 'none',
        marginLeft: 38,
        transition: 'opacity 0.5s ease',
        fontWeight: 500,
        display: 'block',
        '&:hover': {
            opacity: 0.5
        }
    }
}));

export const HeaderLink: React.FC<LinkProps & { color?: string }>
    = (props) => {
    const classes = useStyles();
    return (
        <Link {...props} className={clsx(classes.root, props.className)} style={{color: props.color, ...props.style}}/>
    )
}

export default HeaderLink;