import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import DeletePost from './DeletePost';
import EditPost from './EditPost';
var axios = require('axios');
const MyPost = () => {
  const [data, setData] = useState([]);
  var axios = require('axios');
  const aToken = localStorage.getItem('aToken')
  var config = {
    method: 'get',
    url: 'http://dhirajssh.pythonanywhere.com/api/user/blogs/',
    headers: {
      'Authorization': `Bearer ${aToken}`
    }
  };
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [data])
  const history = useHistory();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Container maxWidth='md' style={{ paddingTop: '50px' }}>
            <Carousel>
              {
                data.map((item, i) => {
                  return <center>
                    <div>
                      {/* {item.image} */}
                      <img width='850px' height='550px' src='https://images.pexels.com/photos/3078831/pexels-photo-3078831.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' />
                      {/* <h1>{item.title}</h1> */}

                    </div>
                  </center>
                })
              }
            </Carousel>
          </Container>

        </Grid>
        <Grid item >
          <h2 className='blogContent'>We are Creative &nbsp;
            <br />
            <span style={{ color: '#4F0174', fontSize: '5rem' }}> & </span>
            Innovative
          </h2>
        </Grid>
      </Grid>
      <h1>
        <Grid container spacing={4}>
          {data.map((x) => (
            <Grid item key={x.id} xs={12} sm={6} md={4} style={{ transform: 'scale(.8)' }}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://images.pexels.com/photos/3078831/pexels-photo-3078831.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  // image={x.image}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {x.title}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h3">
                    MY POST
                  </Typography>
                  <Typography>
                    {x.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Link to={`/EditPost/${aToken.data}`}> */}
                  {/* <Link to={`/AddPost/${aToken.data}`}> */}
                  <Button size="md" color='secondary'
                    onClick={() => {
                      localStorage.setItem('idE',x.id)
                      history.push(`/EditPost/${aToken.data}`)
                    }}
                  >Edit</Button>
                  {/* </Link> */}
                  <Button size="md" color='secondary' onClick={() => {
                    localStorage.setItem('idD', x.id)
                    DeletePost()
                  }}>Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </h1>
    </div>
  )
}

export default MyPost


// class MyPost extends React.Component{

//   constructor(){
//     super();
//     this.state=[{}];
//   }
//   componentDidMount(){
//     var axios = require('axios');
//   console.log(this.props);
//   var config = {
//     method: 'get',
//     url: 'http://dhirajssh.pythonanywhere.com/api/user/blogs/',
//     headers: {
//       'Authorization': `Bearer ${this.props.data}`
//     }
//   };
//   axios(config)
//         .then(function (response) {
//           console.log(JSON.stringify(response.data));
//         this.setState(response.data)
//         console.log(this.state);
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//   }
// render(){
//   return        <Container maxWidth='md' style={{paddingTop:'50px'}}>
//         <Carousel>
//      {
//          this.state.map((item, i) => {
//          return <center>
//          <div>
//        {/* {item.image} */}
//          <img width='850px' height='550px' src='https://images.pexels.com/photos/3078831/pexels-photo-3078831.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''/>
//          {/* <h1>{item.title}</h1> */}

//         </div>
//          </center>
//      })
//      }
//         </Carousel>
//          </Container>
// }
//   return (
//     <div>
//       <Grid container spacing={2}>
//       <Grid item xs={8}>
//       <Container maxWidth='md' style={{paddingTop:'50px'}}>
//       <Carousel>
//     {
//       this.state.map((item, i) => {
//       return <center>
//       <div>
//     {/* {item.image} */}
//       <img width='850px' height='550px' src='https://images.pexels.com/photos/3078831/pexels-photo-3078831.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''/>
//       {/* <h1>{item.title}</h1> */}

//       </div>
//       </center>
//     })
//     }
//       </Carousel>
//       </Container>

//       </Grid>
//       <Grid item >
//       <h2 className='blogContent'>We are Creative &nbsp; 
//       <br/>
//       <span style={{color:'#4F0174',fontSize:'5rem'}}> & </span>
//       Innovative
//       </h2>
//       </Grid>
//       </Grid>
//       <h1>
//       <Grid container spacing={4}>
//     {this.state.map((x) => (
//       <Grid item key={x.id} xs={12} sm={6} md={4} style={{transform:'scale(.8)'}}>
//       <Card
//       sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//       >
//       <CardMedia
//       component="img"
//       sx={{
//       // 16:9
//       pt: '56.25%',
//     }}
//       image="https://images.pexels.com/photos/3078831/pexels-photo-3078831.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//       // image={x.image}
//       alt="random"
//       />
//       <CardContent sx={{ flexGrow: 1 }}>
//       <Typography gutterBottom variant="h5" component="h2">
//     {x.title}
//       </Typography>
//       <Typography gutterBottom variant="h5" component="h3">
//       MY POST
//       </Typography>
//       <Typography>
//     {x.description}
//       </Typography>
//       </CardContent>
//       <CardActions>
//       <Button size="md" color='secondary' onClick={()=>{
//         EditPost(this.props.data,x.id)
//       }}
//       >Edit</Button>
//       <Button size="md" color='secondary' onClick={()=>{
//       DeletePost(this.props.data,x.id)
//         // this.state.forceUpdate();
//       }}>Delete</Button>
//       </CardActions>
//       </Card>
//       </Grid>
//     ))}
//       </Grid>
//       </h1>
//     </div>
//   )}
// }

// export default MyPost
