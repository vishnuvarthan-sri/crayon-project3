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
  Button,
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
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
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
  noCopy: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon2:{
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop:theme.spacing(30)
  },
  plaque:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:theme.spacing(20),
    flexDirection:"column"
  },
  list: {
    border: "1px solid #0000001A",
    height: "100%",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    overflowX: "hidden",
    borderRadius: "10px",
    padding: 5,
  },
  select: {
    border: "2px dashed #110F474D",
    height: "100%",
    padding: "16px",
    background: "#110F4708 0% 0% no-repeat padding-box",
    borderRadius: "7px",
    
  },
  list1: {
    border: "1px solid #0000001A",
    height: "100%",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    overflowx: "hidden",
    borderRadius: "10px",
  },
  root1: {
    marginTop: theme.spacing(20),
    padding: "27px",

  },

  card: {
    border: "1px solid #110F471A",
    padding: "16px",
    background: "#23A9A6 0% 0% no-repeat padding-box",
    boxShadow: "0px 15px 25px #110f470f",
    borderRadius: "7px",
  },
  icon:{
    width: "100px",
    border: '1px solid #110F471A',
    height: '100px',
    display: 'flex',
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    alignItems: "center",
    borderRadius: "50%",
    marginBottom: "10px",
    justifyContent: "center",
  }
});

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  destClone.splice(droppableDestination.index, 0, removed);
  const dest = removed.content;
  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = dest;
  console.log(result, "result");
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
  {
    id:uuidv4(),
    content:"HIV/Aids"
  },
  {
    id:uuidv4(),
    content:"Cancer"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      anchorEl: null,
      list: ITEMS,
      selectItem: "",
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
    old.forEach((items) => {
      items.id = uuidv4();
    });
    this.setState({
      old,
      selectItem: "",
    });
  };
  render() {
    const { classes } = this.props;
    console.log(this.state.list, "the list");
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
          <AppBar position="relative">
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
        </AppBar>
       <div style={{width:"100%"}}>
        <div className={classes.root1}> 
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Grid
              container
              spacing={2}
              direction="row"
            
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
              
              >
                <div className={classes.list}>
                  <Typography variant="h6">Diseases</Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
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
              <Grid
                item
                xs={12}
                sm={12}
                md={9}
                lg={9}
                
              >
                <div className={classes.list1}>
                  <div style={{ padding: "16px", height: "100%" }}>
                    <Droppable droppableId="droppable2">
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          isDraggingOver={snapshot.isDraggingOver}
                          className={classes.select}
                        >
                          {this.state.selectItem.length ? (
                            <div>
                            <div className={classes.card}>
                              <Grid
                                container
                                direction="row"
                                alignItems="center"
                                justify="space-between"
                              >
                                <Grid item>{this.state.selectItem}</Grid>
                                <Grid item >
                                  <CancelOutlinedIcon onClick={this.cardlist}/>
                                </Grid>
                              </Grid>
                            </div>
                            <div className={classes.icon2}>
                             <Button color="primary" style={{backgroundColor:"pink"}}  endIcon={<ArrowForwardIcon/>}>Notify</Button>
                            </div>
                            </div>
                          ) : (
                            <div className={classes.plaque}>
                                  <div className={classes.icon}>
                                  <FlipToFrontIcon fontSize="large" />
                                  </div>
      
                                  <Typography variant="h5">
                                    {" "}
                                    Please drag and drop a Disease
                                  </Typography>
                               
    
                            </div>
                          )}
                        </div>
                      )}
                    </Droppable>
                  </div>
                </div>
              </Grid>

              {/* <Grid item xs={12} sm={12} md lg >
                <div className={classes.list1}>
                  <div style={{padding:"16px",height:"100%",flexGrow:1}}>
                  <Droppable droppableId="droppable2" >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        isDraggingOver={snapshot.isDraggingOver}
                        className={classes.select}
                      >
                        {this.state.selectItem.length ? 
                             <div style={{display:"flex",height:"100%"}}>
                                <div className={classes.card} >
                                  <Grid container direction="row" justify="space-between" alignItems="center">
                                    <Grid item>
                                  {this.state.selectItem}
                                  </Grid>
                                  <Grid item>
                                  <CancelOutlinedIcon
                                    onClick={this.cardlist}
                                  />
                                  </Grid>
                                  </Grid>
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
                  </div>
              </Grid> */}
            </Grid>
          </DragDropContext>
          </div>
          </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
