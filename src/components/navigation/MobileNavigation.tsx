import {Box, ClickAwayListener, IconButton, makeStyles, Theme} from "@material-ui/core";
import MenuLineIcon from "remixicon-react/MenuLineIcon";
import FloatContainer from "../containers/FloatContainer";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import HeaderLink from "./HeaderLink";
import RouteNames from "../../constants/RouteNames";
import React, {useState} from "react";

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
        left: 16,
        right: 16,
        top: 8,
        paddingTop: 46,
        paddingBottom: 32,
        position: 'absolute',
        opacity: props => props.open ? 1 : 0,
        transformOrigin: '100% 0',
        pointerEvents: props => props.open ? "auto" : "none",
        transform: props => props.open ? 'scale(1)' : 'scale(.94)',
        transition: 'all 0.25s cubic-bezier(0.33, 1, 0.68, 1)'
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
                            style={{
                                background: 'rgba(39, 58, 107,0.05)',
                                position: 'absolute',
                                right: 8,
                                top: 8,
                            }}
                        >
                            <CloseLineIcon color='#273A6B' size={22}/>
                        </IconButton>
                    </Box>
                    <Box>
                        <HeaderLink
                            onClick={handleClickOpen}
                            to={RouteNames.about}
                            color='#273A6B'
                            style={{display: 'block', fontWeight: 'bold', marginBottom: 8}}
                        >
                            About
                        </HeaderLink>
                    </Box>
                    <Box>
                        <HeaderLink
                            onClick={handleClickOpen}
                            to={RouteNames.research}
                            color='#273A6B'
                            style={{display: 'block', fontWeight: 'bold', marginBottom: 8}}
                        >
                            Research
                        </HeaderLink>
                    </Box>
                    <Box>
                        <HeaderLink
                            onClick={handleClickOpen}
                            to={RouteNames.developer}
                            color='#273A6B'
                            style={{fontWeight: 'bold'}}
                        >
                            Developer
                        </HeaderLink>
                    </Box>
                </FloatContainer>
            </Box>
        </ClickAwayListener>
    )
}

export default MobileNavigation;