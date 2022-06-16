import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WalletLogin from './pages/WalletLogin/WalletLogin'
import Post from "./components/post/Post";
import Feed from "./components/feed/Feed";
import { DslsocialContext } from "./context/DslsocialContext";
import Dsfeed from "./components/dsfeed/Dsfeed";
import DslFeed from "./pages/DslFeed/DslFeed";
function App() {
  const { user1 } = useContext(DslsocialContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
           {user1.walletAddress ? <Profile />  : <Home />}
        </Route>
        {/* <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route> */}
        <Route path="/profile/username">
        {user1.walletAddress ? <Profile />  : <Home />}       
         </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/walletlogin">
          <WalletLogin/>
        </Route>
        <Route path="/myposts">
          <Feed/>
        </Route>
        <Route path="/allposts">
          <Feed/>
        </Route>
        <Route path="/feed">
          <DslFeed/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
