import {Box, makeStyles} from "@material-ui/core";
import HeaderLink from "./HeaderLink";
import RouteNames from "../../constants/RouteNames";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}));

interface DesktopNavigationProps {
    color: string;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({color}) => {
    const classes = useStyles();

    return (
        <Box
            className={classes.root}
            display='flex'
            alignItems='center'>
            <HeaderLink to={RouteNames.about} color={color}>
                About
            </HeaderLink>
            <HeaderLink to={RouteNames.research} color={color}>
                Research
            </HeaderLink>
            <HeaderLink to={RouteNames.developer} color={color}>
                Developer
            </HeaderLink>
        </Box>
    )
}

export default DesktopNavigation;