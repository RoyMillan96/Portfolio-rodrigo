import Typed from "react-typed"
import { Typography, Grid, Box} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import AvatarIcon from "./Icons/Avatar"

// CSS Styles
const useStyles = makeStyles(theme=>({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1
  }
}))

export default function Header() {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <AvatarIcon className={classes.avatar} alt="Rodrigo Millan"/>
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Rodrigo Millan Colin"]} typeSpeed={40} />
      </Typography>
      <Typography className={classes.subtitle} variant="h5">
        <Typed strings={["Web Design", "We Development", "technical support"]} typeSpeed={40} backSpeed={60} loop/>
      </Typography>
      </Box>
    </>
  );
}