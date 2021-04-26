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
  Divider,
  Menu,
  MenuItem,
  List,
  ListItemText,
  ListItem,
  ListItemSecondaryAction,
  TextField,
  Button
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import PublicIcon from "@material-ui/icons/Public";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import InputAdornment from "@material-ui/core/InputAdornment";

import SearchIcon from "@material-ui/icons/Search";
import FlipToFrontIcon from "@material-ui/icons/FlipToFront";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
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
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    padding: 15,
    margin: 10,
  },
  select: {
    width: 800,
    height: 400,
    borderStyle: "dashed",
    borderRadius: 4,
    margin: 5,
    backgroundColor: "#F3F6FF",
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
    paddingTop: theme.spacing(20),
    padding: 20,
  },
  noCopy: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(20),
  },
  card: {
    background: "green",
    color: "white",
    fontSize: 20,
    padding: 10,
    margin: 10,
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
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
    if (source.droppableId !== destination.droppableId) {
      const results = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );
      this.setState({
        selectItem: results.droppable2,
      });
      
    }
  };

  cardlist = () => {
    let old = this.state.list;
    old.forEach((items)=>{
      items.id = uuidv4()
    })
    this.setState({
      old,
      selectItem: [],
    });
  };
  render() {
    const { classes } = this.props;
    console.log(this.state.list,"the list")
    console.log(this.state.selectItem, "the selected item");
  // let item =""
  //   if(this.state.selectItem !== undefined){
  //    let selected = this.state.selectItem;
  //     selected.forEach((select)=>{
  //       item = select.content
  //     })
  //   }
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
              <Tab label="Dashboard" />
              <Tab label="Disease master" />
              <Tab label="Forms" />
              <Tab label="Country master" />
              <Tab label="Roles" />
              <Tab label="Users" />
              <Tab label="Notification" />
              <Tab label="verification" />
            </Tabs>
          </Paper>
        </AppBar>
        <div className={classes.root1}>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Grid container spacing={1} direction="row">
              <Grid item xs={12} lg className={classes.list}>
                <div>
                  <Typography variant="h6">Diseases</Typography>
                  <TextField
                    variant="outlined"
                    style={{ width: 350 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>

                  <Droppable droppableId="droppable" isDropDisabled={true}>
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

              <Grid item xs={12} lg className={classes.list}>
                <div>
                  <Droppable droppableId="droppable2">
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        isDraggingOver={snapshot.isDraggingOver}
                        className={classes.select}
                      >
                        {/* {this.state.selectItem.length ? (
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
                                  className={classes.card}
                                >
                                  {item.content}
                                  <CancelOutlinedIcon
                                    style={{
                                      display: "flex",
                                      justifyContent: "flex-end",
                                      marginLeft: "auto",
                                      alignItems: "center",
                                    }}
                                    onClick={this.cardlist}
                                  />
                                </div>
                              )}
                            </Draggable>
                          ))
                        ) : (
                          <div className={classes.noCopy}>
                            <FlipToFrontIcon fontSize="large" />
                            <Typography variant="h5">
                              Drag your Context Here
                            </Typography>
                          </div>
                        )}
                        {provided.placeholder} */}
                        {this.state.selectItem.length ? 
                        <div>
                         {this.state.selectItem.map((item, index) => (
                                <div
                                  className={classes.card}
                                >
                                  {item.content}
                                  <CancelOutlinedIcon
                                    style={{
                                      display: "flex",
                                      justifyContent: "flex-end",
                                      marginLeft: "auto",
                                      alignItems: "center",
                                    }}
                                    onClick={this.cardlist}
                                  />
                                </div>
                          ))}
                          <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",marginLeft:"auto",marginTop:220,padding:10}}>
                            <Button color="primary" endIcon={<ArrowForwardIcon />} style={{backgroundColor:"pink"}}>Notify</Button>
                          </div>
                          </div>
                        : (
                          <div className={classes.noCopy}>
                            <FlipToFrontIcon fontSize="large" />
                            <Typography variant="h5">
                              Drag your Context Here
                            </Typography>
                          </div>
                        )}
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
