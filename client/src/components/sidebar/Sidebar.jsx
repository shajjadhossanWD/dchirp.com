import "./sidebar.css";
import {
  Chat,
  Group,
  Bookmark,
  Home,
  
} from "@material-ui/icons";
import PersonIcon from '@mui/icons-material/Person';
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Sidebar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
        <Link to="/">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <span className="sidebarListItemText">Home</span>
          </li>
          </Link>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Messages</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">All Posts</span>
          </li>
          <Link to="/walletlogin">
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">My Posts</span>
          </li>
          </Link>
          <Link to={`/profile/${user.username}`}>
          <li className="sidebarListItem">
            <PersonIcon className="sidebarIcon" />
            <span className="sidebarListItemText">My Profile</span>
          </li>
          </Link>
         
          
          
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {/* {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))} */}

          <button className="addBtn"><AddCircleIcon className="addpostBtn"/></button>
        </ul>

        <div className="sidebarProfile">
        <Link to={`/profile/${user.username}`}>
           <div className="profileDiv">
             <div className="imgDiv">
                  <img
                  src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="topbarImg"
                />
             </div>
             <div className="textDiv">
               <p className="emailpro">{user.email}</p>
               <p className="namepro"><small>{user.username}</small></p>
             </div>
           </div>
         </Link>
        </div>
      </div>
    </div>
  );
}
