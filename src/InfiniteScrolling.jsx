import React, { useEffect, useState } from "react";
import axios from "axios";
const InfiniteScrolling = (pageNumber) => {
  const aToken = JSON.parse(localStorage.getItem("authToken"));
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [info, setInfo] = useState(0);
  useEffect(() => {
    setError(false);
    setLoading(true);
    axios({
      method: "GET",
      url: `http://dhirajssh.pythonanywhere.com/api/page?page=${pageNumber}`,
      headers: {
        Authorization: `Bearer ${aToken.access}`,
      },
    }).then((res) => {
      console.log(res.data);
      localStorage.setItem("data", JSON.stringify([...blogs, res.data]));
      setBlogs((prevBlogs) => {
        return [...prevBlogs, res.data];
      });
      console.log(info);
      console.warn(blogs);
    

      if (pageNumber < 5) {
        setHasMore(!hasMore);
      }
      setLoading(false);
    });
  }, [pageNumber]);
  return { loading, Error, blogs, hasMore, info };
};

export default InfiniteScrolling;
