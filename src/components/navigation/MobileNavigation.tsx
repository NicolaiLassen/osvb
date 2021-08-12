import {Box, ClickAwayListener, IconButton, makeStyles, Theme} from "@material-ui/core";
import MenuLineIcon from "remixicon-react/MenuLineIcon";
import FloatContainer from "../containers/FloatContainer";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import HeaderLink from "./HeaderLink";
import RouteNames from "../../constants/RouteNames";
import React, {useState} from "react";
import {headerNavigationRoutes} from "../../constants/Navigation";

interface MobileNavigationStyleProps {
    open: boolean;
}

const useStyles = makeStyles<Theme, MobileNavigationStyleProps>((theme) => ({
    root: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    mobilNavigation: {
        left: 8,
        right: 8,
        top: 8,
        paddingTop: 32,
        overflow: 'hidden',
        position: 'absolute',
        opacity: props => props.open ? 1 : 0,
        transformOrigin: '100% 0',
        pointerEvents: props => props.open ? "auto" : "none",
        transform: props => props.open ? 'scale(1)' : 'scale(.96)',
        transition: 'all 0.25s cubic-bezier(0.33, 1, 0.68, 1)',
        boxShadow: '0px 16px 40px rgba(112, 144, 176,0.5) !important'
    },
    mobileCloseButton: {
        background: 'rgba(39, 58, 107,0.05)',
        position: 'absolute',
        right: 8,
        top: 8,
        zIndex: 10
    }
}));

interface MobileNavigationProps {
    color: string;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({color}) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleClickOpen = () => {
        setOpen(!open);
    }
    const handleClickAway = () => {
        if (open) {
            setOpen(false);
        }
    }
    const classes = useStyles({open});

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box className={classes.root}>
                <IconButton
                    onClick={handleClickOpen}
                    style={{background: `${color}11`}}>
                    <MenuLineIcon color={color} size={22}/>
                </IconButton>
                <FloatContainer className={classes.mobilNavigation}>
                    <Box>
                        <IconButton
                            onClick={handleClickOpen}
                            className={classes.mobileCloseButton}
                        >
                            <CloseLineIcon color='#273A6B' size={22}/>
                        </IconButton>
                    </Box>
                    {
                        headerNavigationRoutes.map((route) =>
                            <HeaderLink
                                onClick={handleClickOpen}
                                to={route.link}
                                color='#273A6B'
                                style={{display: 'block', fontSize: 17, fontWeight: 500}}
                            >
                                <Box
                                    mb={1.5}
                                    display='flex'
                                    alignItems='center'
                                >
                                    {<route.icon size={21}/>}
                                    <Box pl={1.5}>{route.name}</Box>
                                </Box>
                            </HeaderLink>
                        )
                    }
                    <Box
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        height={62}
                        mt={2}
                        style={{background: '#F5F9FF'}}>
                        <HeaderLink
                            onClick={handleClickOpen}
                            to={RouteNames.panel}
                            color='white'
                            style={{
                                display: 'block',
                                fontSize: 17,
                                fontWeight: 500,
                                margin: 0,
                                padding: '4px 24px',
                                borderRadius: 100,
                                background: '#273A6B'
                            }}
                        >
                            <Box>Panel</Box>
                        </HeaderLink>
                    </Box>
                </FloatContainer>
            </Box>
        </ClickAwayListener>
    )
}

export default MobileNavigation;