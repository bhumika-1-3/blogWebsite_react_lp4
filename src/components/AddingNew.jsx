import React, { useState,useContext } from "react";
import axios from "axios";
import { Container, Input, TextField } from "@mui/material";
import { useHistory } from "react-router";
import AuthContext from "./Context/AuthContext";
import Carousel from "react-material-ui-carousel";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const aToken = localStorage.getItem("aToken");
const AddingNew = () => {
  const { authToken } = useContext(AuthContext);
  const [value, setValue] = useState({
    title: "",
    description: "",
    file: "",
  });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, SetFile] = useState(null);
  const handleInputChange = (e) => {
    SetFile(e.target.files[0]);
  };
  const submit = () => {
    const aToken = localStorage.getItem("aToken");
    const data = new FormData();
    data.append("image", selectedFile);
    data.append("title", title);
    data.append("description", description);
    console.log(data);
    console.warn(selectedFile);
    console.log(title, description, selectedFile);
  
    var config = {
      method: "post",
      url: `http://dhirajssh.pythonanywhere.com/api/blogs/`,
      headers: {
        Authorization: `Bearer ${authToken.access}`,
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        history.push(`/blog`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const history = useHistory();
  return (
    <div>
      <Container>
        <center>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            style={{ width: "800px" }}
          >
            <CardMedia
              component="img"
              style={{ width: "800px", height: "500px" }}
              image="https://images.pexels.com/photos/3078831/pexels-photo-3078831.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              // image={x.image}
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <TextField
                autoFocus
                name="title"
                fullWidth
                // onChange={(e) => { setValue({ title: e.target.value }) }}>
                onChange={(e) => setTitle(e.target.value)}
              ></TextField>
              <TextField
                name="file"
                fullWidth
                type="file"
                onChange={handleInputChange}
                // onChange={(e)=>{setValue({file:e.target.files[0]})}}
              ></TextField>
              <TextField
                fullWidth
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                // onChange={(e) => { setValue({ description: e.target.value }) }}
              ></TextField>
            </CardContent>
            <CardActions>
              <Button
                size="md"
                color="secondary"
                variant="contained"
                onClick={() => submit()}
              >
                Submit
              </Button>

              <Button
                size="md"
                color="secondary"
                onClick={() => {
                  history.push(`/blog`);
                }}
              >
                Go back
              </Button>
            </CardActions>
          </Card>
        </center>
      </Container>
    </div>
  );
};

export default AddingNew;
