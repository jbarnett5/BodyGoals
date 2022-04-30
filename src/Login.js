import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Card, CardContent, CardHeader, CardActions, Button, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './actions/auth';

const Login = ({ isAuthenticated }) => {
    const navigate = useNavigate()
    const [ loginData, setLoginData ] = useState({ email: "", password: "" })
    const dispatch = useDispatch();

    useEffect(() => {
        if(isAuthenticated){ 
            navigate("/posts")
        }
         },[isAuthenticated])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginData));

        // clear();
      
    }

    return (
      <Container>
        <Card sx={{ minWidth: 275 }}>
            <CardHeader title="Login to your account" />
            <CardContent>
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <TextField name="email" variant="outlined" label="Email" fullWidth value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value})}/>
                    <TextField name="password" variant="outlined" label="Password" type='password' fullWidth value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value})}/>
                    <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                </form>
            </CardContent>
            <CardActions>
                <Link to="/register">
                    <Button size="small">Sign Up</Button>
                </Link>
            </CardActions>
        </Card>`
      </Container>
    );
}
export default Login;