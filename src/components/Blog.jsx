import { useState, useEffect, createContext } from "react";
import AllPost from "./AllPost";
import MyPost from "./MyPost";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PrimarySearchAppBar from "./Nav";
import UseAxios from './Context/UseAxios'
import InfiniteScrolling from "../InfiniteScrolling";
export const BlogContext=createContext()

var axios = require("axios");
var FormData = require("form-data");
const Blog = () => {
  const [allblog, setBlogs] = useState([]);
  const [myblog, setMyBlogs] = useState([]);
  const theme = createTheme();
  let api = UseAxios();

  useEffect(()=>{
    getBlogs();
  },[allblog,myblog])

  let getBlogs = async () => {
    let response = await api.get("/blogs/");
    let response2 = await api.get("/user/blogs/");
    if (response.status === 200) {
      setBlogs(response.data);
    }
    if (response2.status === 200) {
      setMyBlogs(response2.data);
    }
  };
InfiniteScrolling(1)
localStorage.setItem('numberB',allblog.length)
  return (
    <>
      <div>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BlogContext.Provider value={[allblog,myblog]} >
          <PrimarySearchAppBar />

          <MyPost />
          <AllPost />
          </BlogContext.Provider>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Blog;
