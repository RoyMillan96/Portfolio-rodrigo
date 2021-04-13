import {useState} from "react"
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, ListItem, IconButton, ListItemText, Divider, List, ListItemIcon , Typography, Box } from "@material-ui/core";
import {AssignmentIndRounded, HomeRounded, AppsRounded, BookRounded, BuildRounded, EmojiPeopleRounded, WebRounded} from "@material-ui/icons"
import DehazeIcon from '@material-ui/icons/Dehaze';
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import AvatarIcon from "./Icons/Avatar";
import Footer from "./Footer";

// CSS Styles
const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 320,
    background: "#511",
    height: "100%"
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(14),
    height: theme.spacing(14)
  },
  ListItem: {
    color: "tan"
  }
}));

const menuItems = [
  {
    listIcon: <HomeRounded/>,
    listText: "Home",
  },
  {
    listIcon: <EmojiPeopleRounded/>,
    listText: "About me",
  },
  {
    listIcon: <AssignmentIndRounded/>,
    listText: "Professional resume",
  },
  {
    listIcon: <BuildRounded/>,
    listText: "Skills",
  },
  {
    listIcon: <BookRounded/>,
    listText: "Blog",
  },
  {
    listIcon: <AppsRounded/>,
    listText: "Portfolio",
  },
  {
    listIcon: <WebRounded/>,
    listText: "courses",
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
      <AvatarIcon className={classes.avatar} alt="Rodrigo Millan"/>
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
              <Footer/>
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar;