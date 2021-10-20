import { useParams } from 'react-router';
import { useState,useEffect } from 'react';
import AllPost from './AllPost';
import MyPost from './MyPost';
import AppBar from '@mui/material/AppBar';
import AddPost from './AddPost';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
var axios = require('axios');
var FormData = require('form-data');
const Blog = () => {

  const token = useParams();
  console.log(token.id.substring(1, token.id.length - 1));
  const aToken = token.id.substring(1, token.id.length - 1)
  const theme = createTheme();
 localStorage.setItem("aToken",aToken)
  return (
    <div>

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" color='secondary'>
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap style={{marginRight:'200px'}}>
            Blog
          </Typography>
          <Link to={'/login'}>
        <Button>Log Out</Button>
        </Link> 
        </Toolbar>
      </AppBar>
    <MyPost />
    <AllPost />
   {/* {data.map((x)=>{
    return <div>
     {x.title}
    </div>
   })} */}
    </ThemeProvider>
    </div>
  )
}

export default Blog
