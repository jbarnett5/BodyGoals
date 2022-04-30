import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Card, CardContent, CardHeader, CardActions, Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { register } from './actions/auth';

const Register = ({ isAuthenticated }) => {
    const navigate = useNavigate()
    const [ registrationData, setRegistrationData ] = useState(
        {
            name: '',
            email: '',
            password: '',
            password2: '',
        }
    )

    useEffect(() => {
        if(isAuthenticated){ 
            navigate("/posts")
        }
         },[isAuthenticated])

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(registrationData, navigate));
        setRegistrationData({
            name: '',
            email: '',
            password: '',
            password2: '',
        })
    }

    return (
      <Container>
        <Card sx={{ minWidth: 275 }}>
            <CardHeader title="Register for your new BodyGoals account below" />
            <CardContent>
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <TextField name="name" variant="outlined" label="Name" fullWidth value={registrationData.name} onChange={(e) => setRegistrationData({ ...registrationData, name: e.target.value})}/>
                    <TextField name="email" variant="outlined" label="Email" fullWidth value={registrationData.email} onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value})} />
                    <TextField name="password" variant="outlined" label="Password" type='password' fullWidth value={registrationData.password} onChange={(e) => setRegistrationData({ ...registrationData, password: e.target.value})} />
                    <TextField name="password2" variant="outlined" label="Confirm Password" type='password' fullWidth value={registrationData.password2} onChange={(e) => setRegistrationData({ ...registrationData, password2: e.target.value})}/>
                    <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                </form>
            </CardContent>
            <CardActions>
                <Link to="/login">
                    <Button size="small">Login</Button>
                </Link>
            </CardActions>
        </Card>`
      </Container>
    );
}
export default Register;