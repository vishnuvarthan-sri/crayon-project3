import "./App.css";
import React from "react";
import {
  AppBar,
  Grid,
  withStyles,
  CssBaseline,
  Toolbar,
  Tabs,
  Tab,
  Paper,
  Typography,
  IconButton,
  Button,
  Divider,
  Menu,
  MenuItem
} from "@material-ui/core";
import {AccountCircle} from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import PublicIcon from '@material-ui/icons/Public';

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  last:{
   position:'relative',
   marginLeft:0
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      anchorEl:null
    };
  }
 handlechange=(e,newvalue)=>{
this.setState({
  value:newvalue
})
  }
  handleMenu=(e)=>{
    this.setState({
      anchorEl:e.currentTarget
    })
  }
  handleClose=(e)=>{
    this.setState({
      anchorEl:null
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <PublicIcon fontSize="large"/>
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      IPPC
    </Typography>
    <IconButton color="inherit">
    <NotificationsNoneRoundedIcon/>

    </IconButton>
    <Divider orientation="vertical" flexItem/>
    <IconButton color="inherit">
    <AccountCircle/>
    </IconButton>
    <Typography variant="h5" >Kamesh Murugan</Typography>
    <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={this.handleMenu}
      >
        <ArrowDropDownIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={this.state.anchorEl}
        keepMounted
        open={Boolean(this.state.anchorEl)}
        onClose={this.handleClose}
      >
        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        
      </Menu>
         </Toolbar>
          <Paper square>
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              aria-label="disabled tabs example"
              value={this.state.value}
              onChange={this.handlechange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Notify" />
              <Tab label="Disabled" />
              <Tab label="Active" />
              <Tab label="Active" />
              <Tab label="Disabled" />
              <Tab label="Active" />
              <Tab label="Disabled" />
              <Tab label="Active" />
            </Tabs>
          </Paper>
        </AppBar>
        
      </div>
    );
  }
}

export default withStyles(styles)(App);
