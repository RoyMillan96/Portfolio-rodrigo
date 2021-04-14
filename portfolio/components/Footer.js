import Link from 'next/link'
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
        <Link href="https://www.instagram.com/millan.rodrigo/">
            <BottomNavigationAction 
            className={classes.root}
            style={{padding: 0}}
            icon={<Instagram/>}
            />
        </Link>
        <Link href="https://t.me/RoyMillan96">
          <BottomNavigationAction 
            className={classes.root}
            style={{padding: 0}}
            icon={<Telegram/>}
          />
        </Link>
        <Link href="https://github.com/RoyMillan96">
          <BottomNavigationAction 
            className={classes.root}
            style={{padding: 0}}
            icon={<GitHub/>}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/rodrigo-millan-colin-605b73178/">
          <BottomNavigationAction 
            className={classes.root}
            style={{padding: 0}}
            icon={<LinkedIn/>}
          />
        </Link>
      </BottomNavigation>
    </div>
  )
}

export default Footer;