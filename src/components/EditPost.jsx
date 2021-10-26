import { Container, Input, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import Carousel from 'react-material-ui-carousel'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import DeletePost from './DeletePost';
var FormData = require('form-data');
var axios = require('axios');
const EditPost = () => {
    const aToken = localStorage.getItem('aToken')
    const editData = localStorage.getItem('editData')
    const data = JSON.parse(editData)
    const history = useHistory();
    console.log(data);
    const [value, setValue] = useState({
        title: data.title,
        // image: '',
        description: data.description,

    })
    var config = {
        method: 'put',
        url: `http://dhirajssh.pythonanywhere.com/api/blogs/detail/${data.id}/`,
        headers: {
            'Authorization': `Bearer ${aToken}`,
            // ${token.id}`,
            // ...data.getHeaders()
        },
        data: value
    };
    // console.log(token.id);
    const handleChanges = (event) => {
        setValue({
            ...value, [event.target.name]: event.target.value,
        })
    }

    return (
        <div>
            <Container >
                <center>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} style={{ width: '800px' }}  >
                        <CardMedia
                            component="img"
                            style={{ width: '800px', height: '500px' }}
                            image="https://images.pexels.com/photos/3078831/pexels-photo-3078831.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            // image={x.image}
                            alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <TextField
                                autoFocus
                                name='title'
                                fullWidth
                                value={value.title}
                                onChange={(event) => {
                                    handleChanges(event)
                                }}></TextField>
                            <TextField
                                fullWidth

                                name='description'
                                value={value.description}
                                onChange={(event) => {
                                    handleChanges(event)
                                }}></TextField>
                        </CardContent>
                        <CardActions>
                            {/* <Link to={`/EditPost/${aToken.data}`}> */}
                            {/* <Link to={`/AddPost/${aToken.data}`}> */}
                            <Button size="md" color='secondary'
                                onClick={() => {
                                    axios(config)
                                    .then(function (response) {
                                        console.log(JSON.stringify(response.data));
                                        history.push(`/blog/"${aToken}"`)
                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    });
                                }}
                            >Submit</Button>
                            {/* </Link> */}
                            <Button size="md" color='secondary' onClick={() => {
                                        history.push(`/blog/"${aToken}"`)
                            }}>Go back</Button>
                        </CardActions>
                    </Card>
                </center>
            </Container>
        </div>
    )
}

export default EditPost
