import React, {useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';

const PostsApp = ({ isAuthenticated }) => {
    const navigate = useNavigate()
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());
      if (!isAuthenticated) {
        navigate('/')
      }
    }, [currentId, dispatch, isAuthenticated]);

    return (
      <Grow in>
      <Container>
        <Grid className={classes.mainContainer} container direction="column-reverse" justifyContent="space-between" 
        alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
    );
};

export default PostsApp;