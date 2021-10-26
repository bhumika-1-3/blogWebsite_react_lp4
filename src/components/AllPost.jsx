import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typical from 'react-typical'
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import EditPost from '../components/EditPost'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
var axios = require('axios');
var FormData = require('form-data');

const AllPost = () => {
  const [data, setData] = useState([]);
  var axios = require('axios');
  // console.log(aToken.data);

  const atoken = localStorage.getItem('aToken')
  console.warn(atoken);
  var config = {
    method: 'get',
    url: 'http://dhirajssh.pythonanywhere.com/api/blogs/',
    headers: {
      'Authorization': `Bearer ${atoken}`
    }
  };
  useEffect(() => {
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [data])

  localStorage.setItem('blogs', data.length)
  return (
    <div>
      <center>
      <Typical
        steps={['Trending', 1000, 'Trending Blogs', 500]}
        loop={Infinity}
        wrapper='h1'
      />
      </center>
      <Container sx={{ py: 2 }} maxWidth="lg" >
        <Grid container spacing={7}>
          {data.map((x) => (
            <Grid item key={x.id} xs={12} sm={6} md={4}>
              <Card 
                sx={{ height: '80%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://source.unsplash.com/random"
                  // image={x.image}
                  alt="random"
                  className='allImg'
                />
                <CardContent 
                  className='allImg'
                >
                  <Typography gutterBottom variant="h5" component="h2" >
                    {x.title}
                  </Typography>
                  <Typography>
                    {x.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default AllPost
