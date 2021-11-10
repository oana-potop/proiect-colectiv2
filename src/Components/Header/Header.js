import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { DnDLogo } from "../../Assets/assets";
import { useScrollTrigger } from "@mui/material";
import { makeStyles } from "@mui/styles";

const ElevationScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "4em",
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" style={{background: "#212121"}} >
          <Toolbar>
            <img src={DnDLogo} height="69" style={{padding: 8}}/>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
