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
import { useContext, useState } from "react";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import { DslsocialContext } from "../../context/DslsocialContext";
import swal from "sweetalert";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WalletPopUp from "../WalletPopup/WalletPopup";
import PostSharePopUp from "../PostSharePopUp/PostSharePopUp";

export default function Sidebars() {
  const { user1, logOut} = useContext(DslsocialContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const Logout = () => {
    logOut();
    swal({
        // title: "S",
        text: "You have successfully logged out.",
        icon: "success",
        button: "OK!",
        className: "modal_class_success",
    });
}
const [open, setOpen] = useState(false);

const handleClickOpen = () => {
    setOpen(true);
};
const handleClose = () => {
    setOpen(false);
};

const [Postopen, setPostopen] = useState(false);

const handleClickOpenPost = () => {
  setPostopen(true);
};
const handleClosePost = () => {
  setPostopen(false);
};

  return (
   <div className="sidebarDiv">
    <Sidebar
    breakPoint="768"
    className="sidebar"
    content={[
      <div className="sidebar1">
        { user1.walletAddress? 
        <div className="sidebarWrapper">

          <ul className="sidebarList">
         <Link to="/home">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <span className="sidebarListItemText">Home</span>
          </li>
          </Link>
          <Link to="/feed">
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Messages</span>
          </li>
          </Link>
          <Link to="/allposts">
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">All Posts</span>
          </li>
          </Link>
          <Link to="/myposts">
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">My Posts</span>
          </li>
          </Link>
          <Link to="/walletlogin">
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Wallet</span>
          </li>
          </Link>
          <Link to="/profile/username">
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

          <button className="addBtn" onClick={handleClickOpenPost}><AddCircleIcon className="addpostBtn"/></button>
        </ul>

        <div className="sidebarProfile">
        <Link to="/profile/username">
           <div className="profileDiv">
             <div className="imgDiv">
                  <img
                    src={
                      user1.profilePicture?
                      user1.profilePicture
                      :
                      "https://i.ibb.co/w7qb5km/maleprofile.jpg"
                    }
                  alt=""
                  className="topbarImg"
                />
             </div>
             <div className="textDiv">
               <p className="emailpro">dsl@gmail.com</p>
               <p className="namepro"><input type="text" className="inputAddress" value={user1.walletAddress} /></p>
             </div>
           </div>
         </Link>
         <button className="btn btn-danger logoutbtn" onClick={Logout}>Logout</button>
        </div>
      </div>

      :
      <ul>
        <li className="sidebarListItem2">
         <button onClick={handleClickOpen} className="btn btn-danger"><AccountBalanceWalletIcon/>Login With Wallet</button>
       </li>
      </ul>

     }
      </div>
   
    ]}
    ></Sidebar>
    {(!user1.walletAddress || user1.walletAddress === "undefined") &&

      <WalletPopUp
          open={open}
          handleClose={handleClose}
      >
      </WalletPopUp>}

      <PostSharePopUp
          Postopen={Postopen}
          handleClosePost={handleClosePost}
      >
      </PostSharePopUp>
</div>
  );
}
