import Header from "./Header";
import Navbar from "./Navbar";
import Particles from "react-particles-js";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  paticlesCanva: {
    position: "absolute"
  }
})

function HomeIndex() {
  const classes = useStyles()

  return (
    <>
    <Navbar/>
    <Header/>
    <Particles 
      canvasClassName={classes.paticlesCanva}
      params={{
        particles:{
          number: {
            value: 45,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 1,
              color: "tomato"
            }
          },
          size: {
            value: 8 ,
            random: true,
            anim: {
              enable: true,
              speed: 6,
              size_min: 0.1,
              sync: true
            }
          },
          opacity: {
            value: 1,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: true
            }
          }
        }
      }}
    />
    </>
  )
}

export default HomeIndex;

