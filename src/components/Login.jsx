// import React, { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import { Link } from 'react-router-dom';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Validation from './Validation';
// import { useHistory } from 'react-router';
// import { FormHelperText } from '@mui/material';
// import swal from 'sweetalert';

// const theme = createTheme();

// export default function Login() {
//     const [token, setToken] = useState('')
//     const [value, setValue] = useState({
//         email: '',
//         password: '',
//     })
//     const handleChanges = (event) => {
//         setValue({
//             ...value, [event.target.name]: event.target.value,
//         })
//     }
//     const history = useHistory();
//     var data = JSON.stringify({
//         "email": `${value.email}`,
//         "password": `${value.password}`
//     });
//     var axios = require('axios');
//     const [valid, setValid] = useState(false);
//     const [errors, setErrors] = useState({});
//     var config = {
//         method: 'post',
//         url: 'http://dhirajssh.pythonanywhere.com/api/token/',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         data: data
//     };



//     return (


//         <ThemeProvider theme={theme}>
//             <img width='100%' height='720px' src='https://images.pexels.com/photos/4671738/pexels-photo-4671738.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='bg' />
//             <Container component="main" maxWidth="xs" className='loginP'
//                 onMouseOver={() => {
//                     setErrors(Validation(value))
//                     if (errors.email == "") {
//                         setValid(true)

//                     }
//                     else {
//                         setValid(false)
//                     }
//                     if (valid === true) {
//                         axios(config)
//                             .then(function (response) {
//                                 setToken(
//                                     JSON.stringify(response.data.access)
//                                 )
//                                 localStorage.setItem('auth',JSON.stringify(response.data))
//                             })
//                             .catch(function (error) {
//                             });
//                     }
//                 }}
//             >
//                 <CssBaseline />
//                 <Box
//                     sx={{
//                         marginTop: 8,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                     </Avatar>
//                     <Typography component="h1" variant="h5">
//                         LOGIN
//                     </Typography>
//                     <Box component="form" noValidate sx={{ mt: 1 }} >
//                         <TextField
//                             margin="normal"
//                             value={value.email}
//                             onChange={(event) => {
//                                 handleChanges(event)
//                             }}
//                             color='secondary'
//                             required
//                             fullWidth
//                             id="email"
//                             label="Email Address"
//                             name="email"
//                             autoComplete="email"
//                             autoFocus
//                             style={{width:'23rem'}}
//                         />
//                            {errors.email ?
//                                     <FormHelperText error>{errors.email}</FormHelperText>
//                                     :
//                                     <FormHelperText style={{ visibility: 'hidden' }}>..</FormHelperText>

//                                 }
//                         <TextField
//                             value={value.password}
//                             onChange={(event) => {
//                                 handleChanges(event)
//                                 setErrors(Validation(value))
//                                 if (errors.email == "") {
//                                     setValid(true)

//                                 }
//                                 else {
//                                     setValid(false)
//                                 }
//                                 if (valid === true) {
//                                     axios(config)
//                                         .then(function (response) {
//                                             setToken(
//                                                 JSON.stringify(response.data.access)
//                                             )
//                                         })
//                                         .catch(function (error) {
//                                         });
//                                 }
//                             }}
//                             margin="normal"
//                             required
//                             fullWidth
//                             name="password"
//                             label="Password"
//                             color='secondary'

//                             type="password"
//                             id="password"
//                             autoComplete="current-password"

//                         />

//                         <Button
//                             fullWidth
//                             variant="contained"
//                             sx={{ mt: 3, mb: 2 }}
//                             color='secondary'

//                             onMouseOver={() => {
//                                 // if (valid === true) {
//                                 //     axios(config)
//                                 //         .then(function (response) {
//                                 //             setToken(
//                                 //                 JSON.stringify(response.data.access)
//                                 //             )
//                                 //         })
//                                 //         .catch(function (error) {
//                                 //         });
//                                 // }
//                             }}
//                             onClick={() => {

//                                 if (token == '') {
//                                     swal("Account doesn't exists!","Try again","error");
//                                 }
//                                 else {
//                                     history.push(`/blog/${token}`)
//                                 }
//                             }}
//                         //    onDoubleClick={()=>{
//                         //        if(token=!'')

//                         //    }} 
//                         >
//                             Login
//                         </Button>
//                         <Grid container>
//                             <Grid item xs>

//                             </Grid>
//                             <Grid item>
//                                 <Link to='/' variant="body2">
//                                     {"Don't have an account? Sign Up"}
//                                 </Link>
//                             </Grid>
//                         </Grid>
//                     </Box>
//                 </Box>

//             </Container>
//         </ThemeProvider>
//     );
// }

import React, { useContext } from "react";
import AuthContext from "./Context/AuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  return (
    <div style={{padding:'200px',fontSize:'2rem'}} >
      <center>
        <form onSubmit={loginUser}>
          Email &nbsp;
          <input style={{padding:'10px 20px',fontSize:'2rem'}} type="email" name="email" placeholder="email"></input>
          <br />
          <br />
          Password &nbsp;
          <input style={{padding:'10px 20px',fontSize:'2rem'}} type="password" name="password" placeholder="* * * *"></input>
          <br />
          <br />
          <input style={{padding:'10px 20px',fontSize:'2rem',backgroundColor:'black',color:'white',cursor:'pointer'}} type="submit"></input>
        </form>
      </center>
    </div>
  );
};

export default Login;
