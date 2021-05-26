import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import DevFocusImg from "./assets/undraw_dev_focus.svg";

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    // <div className={classes.sectionDesktop}>
    <div className="app">
      <NavBar></NavBar>
      <div className="main-container">
        <div className="flex-container">
          <div className="section">
            <p className="highlight big">
              Estudante, desenvolvedora e programadora
            </p>
            <p className="info big">
              Curabitur dictum magna arcu, et semper enim consectetur sit amet.
              Etiam pellentesque tellus turpis, a sollicitudin neque faucibus
              dignissim. Donec et pellentesque nulla. Nulla mattis maximus massa
              nec commodo. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Phasellus cursus nisl id
              odio fermentum.
            </p>
          </div>
          <div>
            <img className="dev-img" src={DevFocusImg}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
