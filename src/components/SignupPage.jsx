import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import swal from 'sweetalert';
import { FormHelperText } from '@mui/material';
import Validation from './Validation';
import { useHistory } from 'react-router';
import {FcGoogle} from 'react-icons/fc'
import '../App.css'
// import {LockOutlinedIcon} from '@material-ui/icons'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();
var axios = require('axios');

export default function SignInSide() {
    const [valid, setValid] = useState(false);
    const [value, setValue] = useState({
        email: '',
        password: '',
        name: '',
    })
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const handleChanges = (event) => {
        setValue({
            ...value, [event.target.name]: event.target.value,
        })
    }
    var data = JSON.stringify({
        "email": `${value.email}`,
        "first_name": `${value.name}`,
        "password": `${value.password}`
    });

    var config = {
        method: 'post',
        url: 'http://dhirajssh.pythonanywhere.com/api/user/register/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };


    return (
        <div style={{ padding: '10px 30px' }}>

            <ThemeProvider theme={theme}>

                <Grid container component="main" sx={{ height: '70vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://images.pexels.com/photos/7492172/pexels-photo-7492172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                       
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                           
                                <h1 className='signupHeading'>Sign up</h1>
                                <Button variant="outlined"
                                            color='secondary' ><FcGoogle/>&nbsp; Sign up with Google</Button>
                            <Box component="form" noValidate sx={{ mt: 1 }} style={{ width: '80%' }}
                                onMouseOver={() => {
                                    setErrors(Validation(value))
                                    if ((errors.name == "") && (errors.password == "") && (errors.email == "")) {
                                        setValid(true)

                                    }
                                    else {
                                        setValid(false)
                                    }

                                }}>
                                   <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    autoFocus
                                    name="name"
                                    label="Full Name"
                                    color='secondary'
                                    type="text"
                                    id="name"
                                    // style={{ width: '34rem' }}
                                    value={value.name}
                                    onChange={(event) => {
                                        handleChanges(event)
                                    }}
                                    autoComplete="name"
                                />
                                {errors.name ?
                                    <FormHelperText error>{errors.name}</FormHelperText>
                                    :
                                    <FormHelperText style={{ visibility: 'hidden' }}>..</FormHelperText>

                                }
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    color='secondary'
                                    placeholder="abc@gmail.com"
                                    value={value.email}
                                    onChange={(event) => {
                                        handleChanges(event)
                                    }}
                                />
                                {errors.email ?
                                    <FormHelperText error>{errors.email}</FormHelperText>
                                    :
                                    <FormHelperText style={{ visibility: 'hidden' }}>..</FormHelperText>

                                }
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    placeholder="* * * * *"
                                    color='secondary'
                                    value={value.password}
                                    onChange={(event) => {
                                        handleChanges(event)
                                    }}
                                    autoComplete="current-password"
                                />
                                {errors.password ?
                                    <FormHelperText error>{errors.password}</FormHelperText>
                                    :
                                    <FormHelperText style={{ fontSize: '.6rem' }}> Minimum eight characters, at least one letter, one number and one special character are required</FormHelperText>

                                }

                             
                                <center>
                                    <Button
                                        className='signupButton'
                                        size='large'
                                        fullWidth
                                        variant="contained"
                                        style={{borderRadius:'20px'}}
                                        // style={{ fontSize: '1.1rem', marginRight: '15px' }}
                                        color='secondary'
                                        sx={{ mt: 3, mb: 2 }}
                                        onClick={() => {
                                            if (valid === true) {
                                                axios(config)
                                                    .then(function (response) {
                                                        console.log(JSON.stringify(response.data));
                                                        history.push('/login')

                                                    })
                                                    .catch(function (error) {
                                                        console.log(error);
                                                        swal("Account already exists!","Try logging in","error");

                                                    });
                                            }
                                        }}
                                    >
                                        Create account
                                    </Button>
                                    {/* <Link to='/login' style={{ textDecoration: 'none' }} color='secondary' variant="body2">
                                        <Button
                                            style={{ fontSize: '1.15rem', marginLeft: '15px' }}
                                            size='large'
                                            variant="outlined"
                                            color='secondary'
                                            sx={{ mt: 3, mb: 2 }}>Login</Button>
                                    </Link> */}
                           
                            <Grid item >
                                    Already have a account?
                                <Link to='/login' color='secondary' variant="body2">
                                     &nbsp;Log in
                                </Link>
                        </Grid>
                                </center>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>

    );
}