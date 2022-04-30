import React from 'react'
import { AppBar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import bodygoals from '../../images/bodygoals2.png';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/auth';

const Navbar = ({ isAuthenticated }) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const handleLogout = () => {
      dispatch(logout())
    }
    return(
    <AppBar className={classes.appBar} position="static" color="transparent">
      <Typography className={classes.heading}  varaint="h2" align="center">Body Goals</Typography>
      <img className={classes.image} src={bodygoals} alt="icon" height="90" width="70" />
      {isAuthenticated ? (
      <Link to="/">
        <Button onClick={handleLogout} size="small">Logout</Button>
      </Link>
      ) : null
      }
      
    </AppBar>
  
  )
}

export default Navbar;