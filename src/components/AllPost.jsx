import { useParams } from "react-router";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
  useCallback,
} from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typical from "react-typical";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import EditPost from "../components/EditPost";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { BlogContext } from "./Blog";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InfiniteScrolling from "../InfiniteScrolling";
var axios = require("axios");
var FormData = require("form-data");

const AllPost = () => {
  const [pageNumber, setNumber] = useState(1);
  const { loading, Error, blogs, hasMore, info } =
    InfiniteScrolling(pageNumber);
  const b = JSON.parse(localStorage.getItem("data"));
  var axios = require("axios");
  const data = useContext(BlogContext);
  localStorage.setItem("blogs", data.length);
  const [scroll, setScroll] = useState(0);
  const incScroll = () => {
    setScroll((prevScroll) => prevScroll + 1);
  };
  const observer = useRef();
  const lastElement = useCallback(
    (x) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("visible");
          setNumber((prevNumber) => prevNumber + 1);

          console.log(pageNumber);
          setScroll(scroll + 1);
          // console.log(scroll);
        }
      });
      if (x) observer.current.observe(x);
      console.log(x);
    },
    [loading, hasMore]
  );

  return (
    <div>
      <h1 style={{ fontSize: "4rem", textAlign: "center" }}>Trending Blogs</h1>
      <Container sx={{ py: 2 }} maxWidth="lg">
        <Grid container spacing={7}>
          {data[0].map((x) => (
            <Grid item key={x.id} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: "80%", display: "flex", flexDirection: "column" }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  // image={`http://dhirajssh.pythonanywhere.com/${x.image}`}
                  // image="https://source.unsplash.com/random"
                  // image={x.image}
                  // alt="random"
                  className="allImg"
                />
                <div className="allImg">
                  {x.image ==
                  "/media/posts/default.jpg" ? (
                    <img
                      width="400"
                      height="400"
                      src="https://source.unsplash.com/random"
                      alt="img"
                    />
                  ) : (
                    <div>
                      <img width="400" height="400" src={`http://dhirajssh.pythonanywhere.com/${x.image}`} alt="img" />
                    </div>
                  )}
                </div>
                <CardContent className="allImg">
                  <Typography gutterBottom variant="h5" component="h2">
                    {x.title}
                  </Typography>
                  <Typography>{x.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <center>
        {/* infinite scrolling*/}
        {b.length !== 1
          ? b.map((i) => {
              return i.results.map((x, index) => {
                return (
                  <div className="infinite">
                    <h5>{x.id}</h5>
                    <h1>{x.title}</h1>
                    <h3>{x.description}</h3>
                    {/* <h6>{x.image}</h6>
                     */}
                    {x.image ==
                    "http://dhirajssh.pythonanywhere.com/media/posts/default.jpg" ? (
                      <img
                        width="200"
                        height="200"
                        src="https://source.unsplash.com/random"
                        alt="img"
                      />
                    ) : (
                      <div>
                        <img width="200" height="200" src={x.image} alt="img" />
                      </div>
                    )}
                  </div>
                );
              });
            })
          : null}
        {loading == false
          ? b[b.length - 1].results.map((x, index) => {
              if (
                b[b.length - 1].results.length === index + 2 &&
                b[b.length - 1].next != null
              ) {
                return (
                  <div
                    key={x.id}
                    // ref={lastElement}
                    onMouseOver={() => {
                      setNumber((prevNumber) => prevNumber + 1);
                      setScroll(scroll + 1);
                    }}
                    className="infinite"
                  >
                    <h5>{x.id}</h5>
                    <h1 style={{ color: "white" }}>{x.title}</h1>
                    <h3>{x.description}</h3>
                    {x.image ==
                    "http://dhirajssh.pythonanywhere.com/media/posts/default.jpg" ? (
                      <img
                        width="200"
                        height="200"
                        src="https://source.unsplash.com/random"
                        alt="img"
                      />
                    ) : (
                      <div>
                        <img width="200" height="200" src={x.image} alt="img" />
                      </div>
                    )}
                    {/* <h6>{x.image}</h6> */}
                  </div>
                );
              } else if (b[b.length - 1].next != null) {
                return (
                  <>
                    <div className="infinite">
                      <h5>{x.id}</h5>
                      <h1>{x.title}</h1>
                      <h3>{x.description}</h3>
                      {x.image ==
                      "http://dhirajssh.pythonanywhere.com/media/posts/default.jpg" ? (
                        <img
                          width="200"
                          height="200"
                          src="https://source.unsplash.com/random"
                          alt="img"
                        />
                      ) : (
                        <div>
                          <img
                            width="200"
                            height="200"
                            src={x.image}
                            alt="img"
                          />
                        </div>
                      )}

                      {/* <h6>{x.image}</h6> */}
                    </div>
                  </>
                );
              }
            })
          : null}
        <div>{loading && "loading..."}</div>
        {b[b.length - 1].next != null ? (
          <div>Loading...</div>
        ) : (
          <div style={{ fontSize: "1.6rem", color: "red" }}>
            You have reached the end
          </div>
        )}
        <div>{Error && "Error"}</div>
      </center>
    </div>
  );
};

export default AllPost;
