import React from 'react';
import { makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { format } from 'date-fns';
import Avatar from '@material-ui/core/Avatar';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PaymentsIcon from '@mui/icons-material/Payments';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  page: {
    background: '#f9f9f9',
    width: '100%',
    padding: theme.spacing(3),
  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  active: {
    background: '#f4f4f4'
  },
  title: {
    padding: theme.spacing(2),
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  date: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar,
  avatar: {
    marginLeft: theme.spacing(2)
  }
}));

export default function Layout({ children }) {
  const classes = useStyles();
  // Using useNavigate instead of useHistory
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { 
      text: 'Dashboard', 
      icon: <DashboardIcon color="secondary" />, 
      path: '/admin/dashboard' 
    },
    { 
      text: 'Money Donation', 
      icon: <PaymentsIcon color="secondary" />, 
      path: '/admin/money_donation' 
    },
    { 
      text: 'Goods Donation', 
      icon: <ListAltIcon color="secondary" />, 
      path: '/admin/goods_donation' 
    },
    { 
      text: 'Voluntary Service', 
      icon: <VolunteerActivismIcon color="secondary" />, 
      path: '/admin/volunteer_donation' 
    },

  ];

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar 
        position="fixed" 
        className={classes.appBar}
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>Username</Typography>
          <Avatar className={classes.avatar} src="https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" />
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Charity Admin
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              onClick={() => navigate(item.path)} // Using navigate instead of history.push
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        
      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        { children }
      </div>
    </div>
  );
}
