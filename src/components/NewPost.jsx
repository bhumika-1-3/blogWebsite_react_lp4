import axios from 'axios';
import { Container, Input, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Carousel from 'react-material-ui-carousel'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
const aToken = localStorage.getItem('aToken')

class NewPost extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedFile: '',
            title: '',
            description: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
        })
    }
    submit() {
        const aToken = localStorage.getItem('aToken')
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        data.append('title', this.state.title)
        data.append('description', this.state.description)
        console.warn(this.state.selectedFile);
        console.warn(this.state);
        let url = "http://localhost:8000/upload.php";
        var config = {
            method: 'post',
            url: `http://dhirajssh.pythonanywhere.com/api/blogs/`,
            headers: {
                'Authorization': `Bearer ${aToken}`,
                // ${token.id}`,
                // ...data.getHeaders()
            },
            data: data
        };
        var transfer = this.props
        // this.props.history.push("/login");
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                transfer.history.push(`/blog/"${aToken}"`)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
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
                                    onChange={(e) => { this.setState({ title: e.target.value }) }}>
                                </TextField>
                                <TextField
                                    autoFocus
                                    name='image'
                                    fullWidth
                                    type='file'
                                    onChange={this.handleInputChange}
                                ></TextField>
                                <TextField
                                    fullWidth

                                    name='description'
                                    onChange={(e) => { this.setState({ description: e.target.value }) }}
                                ></TextField>
                            </CardContent>
                            <CardActions>
                                <Button size="md" color='secondary' variant="contained"
                                    onClick={() => this.submit()}
                                >Submit</Button>

                                <Button size="md" color='secondary' onClick={() => {
                                    this.props.history.push(`/blog/"${aToken}"`);
                                }}>Go back</Button>
                            </CardActions>
                        </Card>
                    </center>
                </Container>
            </div>

        )
    }
}

export default withRouter(NewPost);