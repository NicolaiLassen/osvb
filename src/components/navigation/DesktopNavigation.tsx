import {makeStyles, Theme} from "@material-ui/core";
import HeaderLink from "./HeaderLink";
import React from "react";
import RouteNames from "../../constants/RouteNames";
import {headerNavigationRoutes} from "../../constants/Navigation";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

interface DesktopNavigationProps {
    color: string;
}

const useStyles = makeStyles<Theme, DesktopNavigationProps>((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    button: {
        padding: '4px 10px 4px 16px',
        borderRadius: 100,
        background: props => `${props.color}33`,
        color: props => props.color,
        display: 'flex',
        alignItems: 'center',
        transition: 'background 0.5s ease',
        '& svg': {
            transition: 'transform 0.2s ease',
        },
        '&:hover': {
            background: props => `${props.color}88`,
            opacity: 1,
            '& svg': {
                transform: 'translateX(3px)'
            }
        }
    }
}));

interface DesktopNavigationProps {
    color: string;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({color}) => {
    const classes = useStyles({color});

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
                    className={classes.button}
                    style={{display: 'flex'}}
                >
                    <span>Panel</span>
                    <ArrowRightSLineIcon size={18} style={{marginLeft: 2}}/>
                </HeaderLink>
            </div>
        </>
    )
}

export default DesktopNavigation;