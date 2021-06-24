import React from "react";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#68C7BA",
    color: "#576BA7",
    height: "20px",
    "&:hover": {
      "&>a": {
        borderColor: "#576BA7"
      }
    }
  }
}));

// const ColorButton = withStyles((theme) => ({
//   root: {
//     color: '#576BA7',
//     textDecoration: 'none',
//     backgroundColor: '#68C7BA',
//     '&:hover': {
//       backgroundColor: '#68C7BA',
//       color: 'white',
//     },
//   },
// }))(Button);

export default function NavBar() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <NavLink exact to="/" style={{ textDecoration: "none" }}>
              <Paper className={classes.paper}>Home</Paper>
            </NavLink>
          </Grid>
          <Grid item xs={3}>
            <NavLink to="/myinfo" style={{ textDecoration: "none" }}>
              <Paper className={classes.paper}>My Info</Paper>
            </NavLink>
          </Grid>
          <Grid item xs={3}>
            <NavLink to="/vacationdetails" style={{ textDecoration: "none" }}>
              <Paper className={classes.paper}>Vacation Details</Paper>
            </NavLink>
          </Grid>
          <Grid item xs={3}>
            <NavLink to="/vacationcalendar" style={{ textDecoration: "none" }}>
              <Paper className={classes.paper}>Vacation Calendar</Paper>
            </NavLink>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
