import { makeStyles } from "@material-ui/styles"
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core"
import {Instagram, Telegram, GitHub, LinkedIn} from "@material-ui/icons"

const useSyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root":{
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root":{
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem"
      }
    }
  }
})

function Footer() {
  const classes = useSyles();
  return (
    <div>
      <BottomNavigation width="auto" style={{background: "#222"}}>
        <BottomNavigationAction 
          className={classes.root}
          style={{padding: 0}}
          icon={<Instagram/>}
        />
        <BottomNavigationAction 
          className={classes.root}
          style={{padding: 0}}
          icon={<Telegram/>}
        />
        <BottomNavigationAction 
          className={classes.root}
          style={{padding: 0}}
          icon={<GitHub/>}
        />
        <BottomNavigationAction 
          className={classes.root}
          style={{padding: 0}}
          icon={<LinkedIn/>}
        />
      </BottomNavigation>
    </div>
  )
}

export default Footer;