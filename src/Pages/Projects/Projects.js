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
import Zoom from "@material-ui/core/Zoom";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 10,
  },
});

let id = 0;
function createData(name, description, downloads) {
  id += 1;
  return { id, name, description, downloads };
}

const pepyUrl = process.env.REACT_APP_PEPI_URL;
const githubUrl = process.env.REACT_APP_GITHUB_URL;

const rows = [
  createData(
    "covid",
    "Python package to get covid info from John Hopkins university API and Worldometers.info",
    <img src={`${pepyUrl}/covid`} alt="covid" />
  ),
  createData(
    "fastapi_camelcase",
    "Package for providing a class for camelizing request and response bodies for fastapi while keeping your python code snake cased.",
    <img src={`${pepyUrl}/fastapi-camelcase`} alt="fastapi-camelcase" />
  ),
  createData(
    "sanic_camelcase_middleware",
    "Middleware for camelizing request and response bodies for sanic",
    <img
      src={`${pepyUrl}/sanic-camelcase-middleware`}
      alt="sanic-camelcase-middleware"
    />
  ),
  createData(
    "go-covid",
    "Go Package to get information regarding the novel corona virus provided by Johns Hopkins university"
  ),
];

function Projects(props) {
  const { classes } = props;

  return (
    <Grid container spacing={24}>
      <Grid item xs={10}>
        <Zoom in={true} style={{ transitionDelay: 20 }}>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Projects</TableCell>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="right">Downloads</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      <a href={`${githubUrl}/${row.name}`}>{row.name}</a>
                    </TableCell>
                    <TableCell align="left">{row.description}</TableCell>
                    <TableCell align="right">{row.downloads}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Zoom>
      </Grid>
    </Grid>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
