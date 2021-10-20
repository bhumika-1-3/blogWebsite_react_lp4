import { Container, Input, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router';
var FormData = require('form-data');
var axios = require('axios');

const AddPost = () => {
    const [value, setValue] = useState({
        title: '',
        image: '/C:/Users/91982/Desktop/ALL FOLDERS/wallpapers/dev2d1.jpg',
        description: ''

    })
    // const token = useParams();
    const token =useParams();
    // console.log(token.id.substring(1, token.id.length - 1));
    // const aToken = token.id.substring(1, token.id.length - 1)
    // const [title, setTitle] = useState('');
    // var data = new FormData();
    // data.append('title',title);
    // data.append('description', 'this is the updated images');

    var config = {
        method: 'post',
        url: 'http://dhirajssh.pythonanywhere.com/api/blogs/',
        headers: {
            'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NzUxNTQ4LCJqdGkiOiJlYjViMTM3MTQ4YzU0ZTczYTg4YmM4NmIwNTU3NDM2YSIsInVzZXJfaWQiOjQ2fQ.F_1lsXplU05VN6Lbgs9nupRIR9LbztnAQAWa-P8Jjho`,
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
            <Container>
                helllooooo
                {/* <Input type='file'></Input> */}
                <TextField
                name='title'
                    value={value.title}
                    onChange={(event) => {
                        handleChanges(event)
                    }}></TextField>
                <TextField
                name='description'
                    value={value.description}
                    onChange={(event) => {
                        handleChanges(event)
                    }}></TextField>
                {/* {setTitle(prompt("title"))} */}
                <button onClick={() => {
                    axios(config)
                        .then(function (response) {
                            console.log(JSON.stringify(response.data));
                        })
                        .catch(function (error) {
                            console.log(error);
                        });

                }}>helllo</button>
            </Container>
        </div>
    )
}

export default AddPost