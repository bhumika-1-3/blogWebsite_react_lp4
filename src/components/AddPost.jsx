
// import DeletePost from './DeletePost';
// var axios = require('axios');
// const AddPost = () => {
//     const aToken = localStorage.getItem('aToken')
//     const editData = localStorage.getItem('editData')
//     const data = JSON.parse(editData)
//     const history = useHistory();
//     console.log(data);
//     // const [value, setValue] = useState({
//         //     title: '',
//         //     image: '',
//         //     description: ''

//         // })
//         const [title,setTitle]=useState(''); 
//         const [image,setImage]=useState(null); 
//         const [description,setDescription]=useState(''); 
//         const formData = new FormData();
//         formData.append('file',image);
//         formData.append('title',title)
//         formData.append('description',description)
//     var config = {
//         method: 'post',
//         url: `http://dhirajssh.pythonanywhere.com/api/blogs/`,
//         headers: {
//             'Authorization': `Bearer ${aToken}`,
//             // ${token.id}`,
//             // ...data.getHeaders()
//         },
//         data: formData
//     };
//     // console.log(token.id);


//     return (
//         <div>
//             <Container >
//                 <center>
//                     <Card
//                         sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} style={{ width: '800px' }}  >
//                         <CardMedia
//                             component="img"
//                             style={{ width: '800px', height: '500px' }}
//                             image="https://images.pexels.com/photos/3078831/pexels-photo-3078831.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//                             // image={x.image}
//                             alt="random"
//                         />
//                         <CardContent sx={{ flexGrow: 1 }}>
//                             <TextField
//                                 autoFocus
//                                 name='title'
//                                 fullWidth
//                                 value={title}
//                                 onChange={(event) =>setTitle(event.target.value)}>
//                                 </TextField>
//                             <TextField
//                                 autoFocus
//                                 name='image'
//                                 fullWidth
//                                 type='file'
//                                 value={image}
//                                 onChange={(event) => setImage(event.target.files[0])
//                                 }></TextField>
//                             <TextField
//                                 fullWidth

//                                 name='description'
//                                 value={description}
//                                 onChange={(event) => 
//                                     setDescription(event.target.value)
//                                 }></TextField>
//                         </CardContent>
//                         <CardActions>
//                             {/* <Link to={`/EditPost/${aToken.data}`}> */}
//                             {/* <Link to={`/AddPost/${aToken.data}`}> */}
//                             <Button size="md" color='secondary' variant="contained"
//                                 onClick={() => {
//                                     axios(config)
//                                     .then(function (response) {
//                                         console.log(JSON.stringify(response.data));
//                                         history.push(`/blog/"${aToken}"`)
//                                     })
//                                     .catch(function (error) {
//                                         console.log(error);
//                                     });
//                                 }}
//                             >Submit</Button>
//                             {/* </Link> */}
//                             <Button size="md" color='secondary' onClick={() => {
//                                         history.push(`/blog/"${aToken}"`)
//                             }}>Go back</Button>
//                         </CardActions>
//                     </Card>
//                 </center>
//             </Container>
//         </div>
//     )
// }

// export default AddPost
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

class FileUpload extends React.Component {

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

export default withRouter(FileUpload);

{/* <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br /><br />

                        <h3 className="text-white">React File Upload - Nicesnippets.com</h3>
                        <br />
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className="text-white">Select File :</label>
                                <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                                <input type="text" className="form-control" name="upload_title" onChange={(e) => { this.setState({ title: e.target.value }) }} />
                                <input type="text" className="form-control" name="upload_des" onChange={(e) => { this.setState({ description: e.target.value }) }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-6">
                                <button type="submit" className="btn btn-dark" onClick={() => this.submit()}>Save</button>
                            </div>
                        </div>
                    </div>
                </div> */}
            // </div>