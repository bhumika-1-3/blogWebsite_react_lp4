import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Validation from './Validation';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
const theme = createTheme();

export default function Login() {
    const [token, setToken] = useState('')
    const [value, setValue] = useState({
        email: '',
        password: '',
    })
    const handleChanges = (event) => {
        setValue({
            ...value, [event.target.name]: event.target.value,
        })
    }
    const history = useHistory();
    var data = JSON.stringify({
        "email": `${value.email}`,
        "password": `${value.password}`
    });
    var axios = require('axios');
    const [valid, setValid] = useState(false);
    const [errors, setErrors] = useState({});
    var config = {
        method: 'post',
        url: 'http://dhirajssh.pythonanywhere.com/api/token/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };



    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs"
                onMouseOver={() => {
                    setErrors(Validation(value))
                    if (errors.email == "") {
                        setValid(true)

                    }
                    else {
                        setValid(false)
                    }
                    if (valid === true) {
                                    axios(config)
                                        .then(function (response) {
                                            console.log(JSON.stringify(response.data));
                                            console.log(JSON.stringify(response.data.access));
                                            setToken(
                                                JSON.stringify(response.data.access)
                                            )
                                        })
                                        .catch(function (error) {
                                            console.log(error);
                                        });
                                }
                }}
            >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        LOGIN
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }} >
                        <TextField
                            margin="normal"
                            value={value.email}
                            onChange={(event) => {
                                handleChanges(event)
                            }}
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            value={value.password}
                            onChange={(event) => {
                                handleChanges(event)
                            }}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onMouseOver={() => {
                                // if (valid === true) {
                                //     axios(config)
                                //         .then(function (response) {
                                //             console.log(JSON.stringify(response.data));
                                //             console.log(JSON.stringify(response.data.access));
                                //             setToken(
                                //                 JSON.stringify(response.data.access)
                                //             )
                                //         })
                                //         .catch(function (error) {
                                //             console.log(error);
                                //         });
                                // }
                            }}
                            onClick={() => {

                                if (token == '') {
                                    swal("Account doesn't exists!", "error");
                                }
                                else {
                                    history.push(`/blog/${token}`)
                                }
                            }}
                        //    onDoubleClick={()=>{
                        //        if(token=!'')

                        //    }} 
                        >
                            Login
                        </Button>
                        <Grid container>
                            <Grid item xs>

                            </Grid>
                            <Grid item>
                                <Link to='/' variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}