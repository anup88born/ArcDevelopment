import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logo from '../../assets/logo.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'; 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: "0px"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        color: "white",
        "&:hover": {
            opacity: 1
        }
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em"
        }
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover":{
            backgroundColor: "transparent"
        }
    },
    drawerIcon: {
        height: "50px",
        width: "50px"
    },
    logo: {
        height: "8em",
        [theme.breakpoints.down("md")] : {
            height: "7em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "5.5em"
        }
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    button: {
        ...theme.typography.estimate,
        marginLeft: "45px",
        marginRight: "25px",
        borderRadius: "25px",
        height: "45px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
        opacity: 1
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
}));
  
export default function Headers(props) {

    const { value, setValue, selectedIndex, setSelectedIndex } = props
    const classes = useStyles()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }
    const handleClick = e => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }
    const handleClose = e => {
        setAnchorEl(null);
        setOpenMenu(false);
    }
    const handleMenuItemClick = (event, index) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(index);
    }
    const menuOptions = [
        {name: "Services", pathname: "/services", activeIndex: 1, selectedIndex: 0},
        {name: "Custom Software", pathname: "/customsoftware", activeIndex: 1, selectedIndex: 1},
        {name: "iOS/Android App Development", pathname: "/mobileapps", activeIndex: 1, selectedIndex: 2},
        {name: "Website Development", pathname: "/websites", activeIndex: 1, selectedIndex: 3}
    ]
    const routes = [
        {name: "Home", link: "/", activeIndex: 0},
        {name: "Services", link: "/services", activeIndex: 1, 
         ariaOwns: anchorEl ? "simple-menu" : undefined,
         ariaHaspopup: anchorEl ? "true" : undefined,
         onMouseOver: event => handleClick(event)
        },
        {name: "The Revolution", link: "/revolution", activeIndex: 2},
        {name: "About Us", link:"/about", activeIndex: 3},
        {name: "Contact Us", link:"/contact", activeIndex: 4}
    ]
    useEffect(()=>{
        [...menuOptions, ...routes].forEach(route => {
            switch(window.location.pathname) {
                case `${route.link}`: 
                    if (value !== route.activeIndex) {
                        setValue(route.activeIndex);
                        if (selectedIndex !== route.selectedIndex) {
                            setSelectedIndex(route.selectedIndex)
                        }
                    }
                break;
                case '/estimate':
                    setValue(5)
                break;
                default:
                break;
            }
        });        
    },[value, selectedIndex, menuOptions, routes])
    const tabs = (
        <React.Fragment>
            <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
                {routes.map(route => (
                    <Tab
                        index={`${route.activeIndex}`}
                        aria-owns = {route.ariaOwns}
                        aria-haspopup = {route.ariaHaspopup}
                        onMouseOver = {route.onMouseOver}
                        component={Link}
                        to={route.link}
                        className={classes.tab}
                        label={route.name} 
                    />
                ))}
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/estimate" onClick={()=>setValue(5)}>Free Estimate</Button>
            <Menu 
                id="simple-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{onMouseLeave: handleClose}}
                classes={{paper: classes.menu}}
                style={{zIndex: 1302}}
                elevation={0}
            >
            {
                menuOptions.map((option, i) => (
                    <MenuItem
                        index={`${option}${i}`}
                        selected={i === selectedIndex}
                        onClick={(event) => {handleMenuItemClick(event, i); handleClose(); setValue(1)}}
                        to={option.pathname}
                        component={Link}
                        classes={{root: classes.menuItem}}
                    >
                        {option.name}
                    </MenuItem>
                )) 
            }    
            </Menu>    
        </React.Fragment>
    )
    const drawer = (
        <React.Fragment>
            <SwipeableDrawer 
                disableBackdropTransition={!iOS} 
                disableDiscovery={iOS} 
                open={openDrawer} 
                onOpen={()=>setOpenDrawer(true)}
                onClose={()=>setOpenDrawer(false)}
                classes={{paper: classes.drawer}}
            >
                <div className={classes.toolbarMargin}/>
                <List disablePadding>
                    {
                        routes.map(route => (
                            <ListItem
                                divider button
                                index={`${route.activeIndex}`}
                                className={value===route.activeIndex? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} 
                                selected={value === route.activeIndex}
                                onClick={()=>{setOpenDrawer(false); setValue(route.activeIndex)}}
                                component={Link}
                                to={route.link}
                            >
                                <ListItemText disableTypography>{route.name}</ListItemText>
                            </ListItem>
                        ))
                    }
                   
                    <ListItem className={value===5? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} selected={value === 5} className={classes.drawerItemEstimate} onClick={()=>{setOpenDrawer(false); setValue(5)}} component={Link} to="/estimate" divider button>
                        <ListItemText disableTypography>Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={()=> setOpenDrawer(!openDrawer)}>
                    <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary" className={classes.appbar}>
                    <Toolbar disableGutters>
                        <Button component={Link} to="/" onClick={()=>setValue(0)} disableRipple className={classes.logoContainer}>
                            <img alt="company logo" className={classes.logo} src={logo} />
                        </Button>
                        {
                            matches ? drawer : tabs
                        }                        
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>    
    )    
} 