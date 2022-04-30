import React, { Component, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Card, CardContent, CardHeader, CardActions, Button } from '@material-ui/core';

const Landing = ({isAuthenticated}) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/posts')
          }
    }, [isAuthenticated])
    return (
      <Container>
        <Card sx={{ minWidth: 275 }}>
            <CardHeader title="Welcome to BodyGoals!" subheader="Your one stop shop for all your workout needs!" />
        `  <CardContent>
            </CardContent>
            <CardActions>
                <Link to="/register">
                    <Button size="small">Sign Up</Button>
                </Link>
                <Link to="/login">
                    <Button size="small">Login</Button>
                </Link>
            </CardActions>
        </Card>`
      </Container>
    );
}
export default Landing;