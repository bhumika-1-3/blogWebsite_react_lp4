import './App.css';
import SignInSide from './components/SignupPage';
import Login from '../src/components/Login'
import { BrowserRouter as Router } from 'react-router-dom'; 
import {Route, Switch } from 'react-router';
import Blog from './components/Blog';
import EditPost from './components/EditPost';
import AddingNew from './components/AddingNew';
import PrimarySearchAppBar from './components/Nav';
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
<PrimarySearchAppBar/>
<Blog/>
</Route>
<Route path="&AddPost"  exact >
<PrimarySearchAppBar/>
<AddingNew/>
</Route>
<Route path="/EditPost"  exact>
<PrimarySearchAppBar/>
<EditPost/>
</Route>
 </Switch>
  </div>
    </Router>
  );
}

export default App;
