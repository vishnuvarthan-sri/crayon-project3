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
  MenuItem,
  Container,
  List,
  ListItemText,
  ListItem,
  ListItemSecondaryAction,
  TextField,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import PublicIcon from "@material-ui/icons/Public";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import InputAdornment from "@material-ui/core/InputAdornment";

import SearchIcon from "@material-ui/icons/Search";
import FlipToFrontIcon from '@material-ui/icons/FlipToFront';

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  last: {
    position: "relative",
    marginLeft: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 350,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    padding: 10,
  },
  select:{
    width:780,
    height:400,
    borderStyle:"dashed",
    borderRadius:4,
    padding:5

  },
  list2: {
    width: 800,
    height:420,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    padding: 10,
  },
  list1: {
    display: "flex",
    userSelect: "none",
    padding: theme.spacing(2),
    margin: "0 0  0.5 0",
    alignItems: "flex-start",
    alignContent: "flex-start",
    borderRadius: 14,
    background: "blue",
  },
  root1: {
    marginTop: theme.spacing(20),
    padding: 30,
  },
  noCopy:{
    display:"flex",
    alignContent:'center',
    justifyContent:"center",
    marginLeft:theme.spacing(5),
    marginTop:theme.spacing(20)
  }
});

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const ITEMS = [
  {
    id: uuidv4(),
    content: "Cholera",
  },
  {
    id: uuidv4(),
    content: "Maleria",
  },
  {
    id: uuidv4(),
    content: "Dengue",
  },
  {
    id: uuidv4(),
    content: "Chickenpox",
  },
  {
    id: uuidv4(),
    content: "Corona",
  },
  {
    id: uuidv4(),
    content: "Typoid",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      anchorEl: null,
      list: ITEMS,
      selectItem: [],
    };
  }
  id2List = {
    droppable: "list",
    droppable2: "selectItem",
  };

  getList = (id) => this.state[this.id2List[id]];

  handlechange = (e, newvalue) => {
    this.setState({
      value: newvalue,
    });
  };
  handleMenu = (e) => {
    this.setState({
      anchorEl: e.currentTarget,
    });
  };
  handleClose = (e) => {
    this.setState({
      anchorEl: null,
    });
  };
  onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }
if(source.droppableId !== destination.droppableId){
    const results = move(
      this.getList(source.droppableId),
      this.getList(destination.droppableId),
      source,
      destination
    );

    this.setState({
      list:results.droppable,
      selectItem: results.droppable2,
    });
  }
  };

  updatelist = () => {
    this.setState({
      list: ITEMS,
    });
  };
  render() {
    const { classes } = this.props;

    console.log(this.state.selectItem, "the selected item");
    return (
      <div className={classes.root}>
        <CssBaseline />

        <AppBar position="absolute">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <PublicIcon fontSize="large" />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              IPPC
            </Typography>
            <IconButton color="inherit">
              <NotificationsNoneRoundedIcon />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <Typography variant="h5">Kamesh Murugan</Typography>
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
              <Tab label="Niggaa" />
            </Tabs>
          </Paper>
        </AppBar>
        <div className={classes.root1}>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Grid container spacing={3} direction="row">
              <Grid item >
                <div className={classes.list}>
                  <Typography variant="h6">Diseases</Typography>
                  <TextField
                    variant="outlined"
                    style={{ width: 320 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>

                  <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                      <List
                        ref={provided.innerRef}
                        isDraggindOver={snapshot.isDraggingOver}
                      >
                        {this.state.list.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                                isDragging={snapshot.isDragging}
                              >
                                <ListItem>
                                  <ListItemText>{item.content}</ListItemText>
                                  <ListItemSecondaryAction>
                                    <DragIndicatorIcon
                                      style={{ cursor: "pointer" }}
                                    />
                                  </ListItemSecondaryAction>
                                </ListItem>
                                <Divider />
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </List>
                    )}
                  </Droppable>
                </div>
              </Grid>

              <Grid item >
                <div className={classes.list2}>
                  <Droppable droppableId="droppable2">
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        isDraggingOver={snapshot.isDraggingOver}
                        className={classes.select}
                      >
                        {this.state.selectItem.length ?
                        
                        this.state.selectItem.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              
                              >
                                {item.content}
                              </div>
                            )}
                          </Draggable>
                        ))
                        
                        :
                          <div className={classes.noCopy}>
                         <FlipToFrontIcon fontSize="large"/>
                         <Typography variant="h5">Drag your Context Here</Typography>
                          </div>
                        }
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              </Grid>
            </Grid>
          </DragDropContext>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
