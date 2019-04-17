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
import TimelineIcon from '@material-ui/icons/TimelineTwoTone';
import CodeIcon from '@material-ui/icons/CodeTwoTone';
import LocalLibraryIcon from '@material-ui/icons/LocalLibraryTwoTone'
import { Link } from 'react-router-dom';
import pink from '@material-ui/core/colors/pink';
import ContactsIcon from '@material-ui/icons/ContactsTwoTone'

const drawerWidth = 240;

const styles = theme => ({

    root: {
      display: 'flex',
    },
    menuBackground: {
      color: '#fff',
      backgroundColor: pink[900],
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,

      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  });
 
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

  render() {
    const { classes, theme, children } = this.props;
    const { open } = this.state;

    const menuItem = (name,icon,path) => {
      return  <Link to={"/"+path} style={{ textDecoration: 'none' }}>
                <MenuItem>
                  <ListItemIcon>{icon}</ListItemIcon>
                    {name}
                  </MenuItem>
              </Link>
    }

    const getMenuItems = () => {
        return <MenuList>
          {menuItem("About Me",<AccountIcon style={{ color: pink[600] }}/>, "about")}
          {menuItem("Education",<SchoolIcon style={{ color: pink[600] }}/>, "education")}
          {menuItem("Experience",<TimelineIcon style={{ color: pink[600] }}/>, "experience")}
          {menuItem("Skills",<CodeIcon style={{ color: pink[600] }}/>, "skills")}
          {menuItem("Impact",<TrendingUpIcon style={{ color: pink[600] }}/>, "impact")}
          {menuItem("Books",<LocalLibraryIcon style={{ color: pink[600] }}/>, "books")}
          {menuItem("Contact",<ContactsIcon style={{ color: pink[600] }}/>, "contact")}

      </MenuList>;
      };

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar,
            classes.menuBackground, 
            {
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
          {getMenuItems()}
        </Drawer>

        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <div>
            {children}
          </div>
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