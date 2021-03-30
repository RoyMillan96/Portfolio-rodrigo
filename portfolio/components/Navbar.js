import {useState} from "react"
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, ListItemIcon , Typography, Box } from "@material-ui/core";
import {AssignmentInd, Home, Apps, ContactMail} from "@material-ui/icons"
import DehazeIcon from '@material-ui/icons/Dehaze';
import MobilRightMenuSlider from "@material-ui/core/Drawer";
// import avatar from "../public/avatar.png";

// CSS Styles
const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 300,
    background: "#511",
    height: "100%"
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  ListItem: {
    color: "tan"
  }
}));

const menuItems = [
  {
    listIcon: <Home/>,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd/>,
    listText: "Resume",
  },
  {
    listIcon: <Apps/>,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail/>,
    listText: "Contact",
  }
]

function Navbar() {
  const [stateNavbar, setStateNavbar] = useState({
    right: false
  });

  const toggleSlider = (slider, open) => () => {
    setStateNavbar({ ...stateNavbar, [slider]: open });
  }

  const classes = useStyles();

  const sideList = slider => (
    <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
      <Avatar className={classes.avatar} src="" alt="Rodrigo Millan "/>
      <Divider />
      <List>
        {menuItems.map((lsItems, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.ListItem}>
              {lsItems.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.ListItem} primary={lsItems.listText}/>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return ( 
    <> 
      <Box component="nav">
        <AppBar position="static" style={{background:"#102a44"}}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <DehazeIcon style={{color:"tomato"}}/> 
            </IconButton>
            <Typography variant="h5" style={{color: "#F8C471"}}>
              Portfolio
            </Typography>
            <MobilRightMenuSlider anchor="right" open={stateNavbar.right} onClose={toggleSlider("right", false)}>
              {sideList("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar;