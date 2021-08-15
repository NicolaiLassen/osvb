import {makeStyles} from "@material-ui/core";
import HeaderLink from "./HeaderLink";
import React from "react";
import RouteNames from "../../constants/RouteNames";
import {headerNavigationRoutes} from "../../constants/Navigation";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
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
                                key={route.link}
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
                        padding: '4px 10px 4px 16px',
                        borderRadius: 100,
                        background: `${color}33`,
                        color: color,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    Panel
                    <ArrowRightSLineIcon size={18} style={{marginLeft: 2}}/>
                </HeaderLink>
            </div>
        </>
    )
}

export default DesktopNavigation;