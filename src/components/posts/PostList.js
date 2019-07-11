// React Imports
import React from "react";
import PropTypes from "prop-types";

//  Material UI imports
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { green } from "@material-ui/core/colors";
// React Router Imports
import { Link } from "react-router-dom";

// Custom Imports
import BlogAPI from "../../services/BlogAPI";

// Custom Styles
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  close: {
    padding: theme.spacing(0.5)
  },
  success: {
    backgroundColor: green[500]
  }
});

// PostsList React Component
class PostList extends React.Component {
  state = {
    posts: [],
    loading: true,
    error: false,
    errorMSG: ""
  };

  API = new BlogAPI();
  getPosts = () => {
    this.setState({
      loading: true
    });

    this.API.getPosts()
      .then(response => {
        this.setState({
          posts: response.data,
          loading: false
        });
      })
      .catch(errors => {
        this.setState({
          loading: false,
          error: true,
          errorMSG: errors
        });
      });
  };
  componentDidMount() {
    this.getPosts();
  }
  deletePost = id => {
    this.API.deletePost(id)
      .then(response => {})
      .catch(errors => {
        this.setState({
          error: true,
          errorMSG: errors
        });
      })
      .finally(() => {
        this.getPosts();
      });
  };
  render() {
    const { classes } = this.props;
    let data = "";
    if (this.state.loading === true) {
      data = <CircularProgress />;
    } else if (this.state.error === true) {
      data = (
        <div>
          Something Went Wrong
          <p style={{ color: "red" }}>{this.state.errorMSG}</p>
        </div>
      );
    } else {
      data = (
        <div>
          <Grid container spacing={3}>
            <Grid item xs={3} />
            <Grid item xs={6}>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Latest Blog Posts From the API</TableCell>
                      <TableCell align="right">&nbsp;</TableCell>
                      <TableCell align="right">&nbsp;</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.posts.map(row => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          <Link to={"/Blog-Reaction/post/" + row.id}>
                            {row.title}
                          </Link>
                        </TableCell>
                        <TableCell align="right">
                          <Button
                            className={classes.button}
                            variant="contained"
                            color="secondary"
                            onClick={() => this.deletePost(row.id)}
                          >
                            <DeleteIcon />
                          </Button>
                        </TableCell>
                        <TableCell align="right">
                          <Link to={"/Blog-Reaction/post/edit/" + row.id}>
                            <Button
                              className={classes.button}
                              variant="contained"
                              color="primary"
                            >
                              <EditIcon />
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Link to="/Blog-Reaction/posts/new">
                {" "}
                <Button variant="contained" className={classes.success}>
                  <AddIcon style={{ color: "white" }} />
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      );
    }

    return data;
  }
}

PostList.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(PostList);
