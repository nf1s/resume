import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountIcon from '@material-ui/icons/AccountCircleTwoTone';
import SchoolIcon from '@material-ui/icons/SchoolTwoTone';
import TrendingUpIcon from '@material-ui/icons/TrendingUpTwoTone';
import CodeIcon from '@material-ui/icons/CodeTwoTone';
import LocalLibraryIcon from '@material-ui/icons/LocalLibraryTwoTone'
import styles from './Styles'
import { Link } from 'react-router-dom';


class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleMenuItemClick= () =>{

  }

  render() {
    const { classes, theme, children } = this.props;
    const { open } = this.state;

    const menuItem = (name,icon) => {

      return   <MenuItem>
                <Link to="/about">
                <ListItemIcon>{icon}</ListItemIcon>
                {name}
                </Link>
              </MenuItem>
    }

    const getMenu = () => {
        return <MenuList>
          {menuItem("About Me",<AccountIcon/>)}
          {menuItem("Education",<SchoolIcon/>)}
          {menuItem("Experience",<TrendingUpIcon/>)}
          {menuItem("Skills",<CodeIcon/>)}
          {menuItem("Interests",<SchoolIcon/>)}
          {menuItem("Favorite Tech Books",<LocalLibraryIcon/>)}
      </MenuList>;
      };

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Ahmed Nafies
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          {getMenu()}
        </Drawer>

        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <h1>
            Hello
          </h1>
          <Typography paragraph>
            {children}
          </Typography>
        </main>

      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);