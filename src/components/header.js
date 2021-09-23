import React from 'react';
import Logo from '../assets/images/Logo1.png';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import Donnate from './Donnate';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  mb5:{
    marginTop:70
  },
  menubarItem:{
    display:"flex",
    flex:0.1,
    justifyContent:'space-evently',
    cursor:'pointer',
    marginLeft:'5px'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  console.log(isMobile);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const openDonnate=()=>{
    return(
      <Donnate/>
    )
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
const icons = [<HomeIcon/>,<AccessibilityIcon/>,<InfoIcon/>,<ContactSupportIcon/>,<SubscriptionsIcon/>];
  return (
    <div className={classes.root }>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{backgroundColor:'#b53f3fb5'}}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })} 
      >
        <Toolbar>
          {isMobile? <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton> : ""}
           {
            !isMobile ?<> 
            <Typography variant="div" noWrap className={classes.menubarItem}>
            <img src={Logo} style={{maxHeight:'80px'}} alt=""/>
          </Typography>
          <Typography variant="p" noWrap className={classes.menubarItem}>
            HOME
          </Typography>
          <Typography variant="p" noWrap className={classes.menubarItem}>
            ABOUT
          </Typography>
          <Typography variant="p" noWrap className={classes.menubarItem}>
            CONTACT
          </Typography>
          <Typography variant="p" noWrap className={classes.menubarItem}>
            JOIN US
          </Typography>
          <Typography variant="p" onChange={openDonnate} noWrap className={classes.menubarItem}>
            DONNET NOW
          </Typography> </>: ''
          
         }
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Home', 'Join Us', 'Donnet Us','Contact Us',  'Avout Us'].map((text, index) => {
            const icon = icons[index]
            return (
              <ListItem button key={text}> 
              <ListItemIcon> {icon} </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            )
          })}
        </List>
        <Divider />
        
      </Drawer>  
    </div>
  );
}
