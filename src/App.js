import './App.css';
import SignInSide from './components/SignupPage';
import Login from '../src/components/Login'
import { BrowserRouter as Router } from 'react-router-dom'; 
import {Route, Switch } from 'react-router';
import AddPost from './components/AddPost';
import Album from './components/Blayout';
import Blog from './components/Blog';
import EditPost from './components/EditPost';
function App() {
  return (
    <Router>
  <div>
  <Switch>
  <Route path='/' exact>
 <SignInSide/>
 </Route>
<Route path='/login'>
  <Login/>
</Route>
<Route path={`/Blog/:id`}>
<Blog/>
{/* <Album/> */}
</Route>
{/* <Route to={`/AddPost/:id`}>
<AddPost/>
</Route> */}
<Route to={`/EditPost/:id`}>
  <EditPost/>
</Route>
 </Switch>
  </div>
    </Router>
  );
}

export default App;
