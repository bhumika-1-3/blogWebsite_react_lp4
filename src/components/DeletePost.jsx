import React from 'react'
import MyPost from './MyPost';
var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();

const DeletePost = (id) => {
  console.warn(id);
  const aToken = localStorage.getItem('aToken')
  const ids=localStorage.getItem('idD')
  var config = {
    method: 'delete',
    url: `http://dhirajssh.pythonanywhere.com/api/blogs/detail/${ids}/`,
    headers: {
      'Authorization': `Bearer ${aToken}`,
      // ...data.getHeaders()
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <div>
      <MyPost />
    </div>
  )
}

export default DeletePost
