import React, { useEffect } from 'react';
import { Container } from '@material-ui/core'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PostsApp from './PostsApp'
import Navbar from './components/Navbar/Navbar';
import Landing from './Landing'
import Login from './Login'
import Register from './Register'
import jwt_decode from "jwt-decode";
import setAuthToken from "./api/setAuthToken";
import { setCurrentUser, logout } from "./actions/auth";
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (decoded.exp < currentTime) {
        // Logout user
        dispatch(logout());
      }
      setAuthToken(token);
      dispatch(setCurrentUser(decoded))
    }
  }, [dispatch, isAuthenticated]);
    return (
      <Router>
        <Container maxidth="lg">
          <Navbar isAuthenticated={isAuthenticated} />
          <Routes>
            <Route exact path="/" element={<Landing isAuthenticated={isAuthenticated}/>} />
            <Route exact path="/login" element={<Login isAuthenticated={isAuthenticated} />} />
            <Route exact path="/register" element={<Register isAuthenticated={isAuthenticated} />} />
            <Route exact path="/posts" element={<PostsApp isAuthenticated={isAuthenticated} />} />
          </Routes>
        </Container>
      </Router>
  );
};

export default App;