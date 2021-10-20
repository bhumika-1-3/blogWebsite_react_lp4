import { Container, Input, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
var FormData = require('form-data');
var axios = require('axios');

const EditPost = () => {
    const [value, setValue] = useState({
        title: '',
        // image: '',
        description: ''

    })
    const aToken = localStorage.getItem('aToken')
    const id = localStorage.getItem('idE')
    const history = useHistory();

    var config = {
        method: 'put',
        url: `http://dhirajssh.pythonanywhere.com/api/blogs/detail/${id}/`,
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
                            history.push(`/blog/"${aToken}"`)
                        })
                        .catch(function (error) {
                            console.log(error);
                        });

                }}>helllo</button>
            </Container>
        </div>
    )
}

export default EditPost
