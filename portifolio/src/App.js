import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";

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
    </div>
    // </div>
  );
}

export default App;
