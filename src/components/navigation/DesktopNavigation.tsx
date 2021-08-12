import {makeStyles} from "@material-ui/core";
import HeaderLink from "./HeaderLink";
import React from "react";
import RouteNames from "../../constants/RouteNames";
import {headerNavigationRoutes} from "../../constants/Navigation";

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
        <>
            <div className={classes.root}>
                {
                    headerNavigationRoutes.map((route =>
                            <HeaderLink
                                to={route.link}
                                color={color}
                            >
                                {route.name}
                            </HeaderLink>
                    ))
                }
                <HeaderLink
                    to={RouteNames.panel}
                    style={{
                        padding: '4px 24px',
                        borderRadius: 100,
                        background: `${color}11`,
                        color: color
                    }}
                >
                    Panel
                </HeaderLink>
            </div>
        </>
    )
}

export default DesktopNavigation;