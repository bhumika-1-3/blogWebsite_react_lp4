import "./App.css";
import SignInSide from "./components/SignupPage";
import Login from "../src/components/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import Blog from "./components/Blog";
import EditPost from "./components/EditPost";
import AddingNew from "./components/AddingNew";
import PrimarySearchAppBar from "./components/Nav";
import AddPost from "./components/AddPost";
import { AuthProvider } from "./components/Context/AuthContext";
import Private from "./components/Private";
function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Switch>
            <Route path="/" exact>
              <SignInSide />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Private path={`/Blog`} component={Blog} />
            <Route path={`/Blog/:id`}>
              <Blog />
            </Route>
            <Route path="/AddPost" exact>
              {/* <AddPost /> */}
              <AddingNew/>
            </Route>
            <Route path="/EditPost" exact>
              <EditPost />
            </Route>
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
