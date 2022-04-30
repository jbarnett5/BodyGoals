import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const fetchPosts = () => axios.get(`${url}/posts`);
export const createPost = (newPost) => axios.post(`${url}/posts`, newPost);
export const updatePost = (id, updatedPost) => axios.patch( `${url}/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete( `${url}/posts/${id}`);
export const likePost = (id) => axios.patch(`${url}/posts/${id}/likePost`);
export const login = (data) => axios.post(`${url}/users/login`, data);
export const register = (data) => axios.post(`${url}/users/register`, data);