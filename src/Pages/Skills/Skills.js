import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import Zoom from "@material-ui/core/Zoom";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 10
  }
});

let id = 0;
function createData(name, strength) {
  id += 1;
  return { id, name, strength };
}

const rows = [
  createData("Python", <ProgressBar finish={95} />),
  createData("Django", <ProgressBar finish={90} />),
  createData("Flask", <ProgressBar finish={85} />),
  createData("Go", <ProgressBar finish={70} />),
  createData("Docker", <ProgressBar finish={80} />),
  createData("React", <ProgressBar finish={75} />),
  createData("AngularJS", <ProgressBar finish={60} />),
  createData("JQuery", <ProgressBar finish={50} />),
  createData("Javascript", <ProgressBar finish={55} />),
  createData("CSS3", <ProgressBar finish={50} />),
  createData("HTML5", <ProgressBar finish={90} />)
];

function Skills(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={8}>
          <Zoom in={true} style={{ transitionDelay: 20 }}>
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Skill</TableCell>
                    <TableCell align="right">Strength</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        <b>{row.name}</b>
                      </TableCell>
                      <TableCell align="right">{row.strength}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Zoom>
        </Grid>
      </Grid>
    </div>
  );
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Skills);
