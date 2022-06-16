import Topbar from "../../components/topbar/Topbar";
import Sidebars from "../../components/sidebars/Sidebars";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
import PostSharePopUp from "../../components/PostSharePopUp/PostSharePopUp";
import { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function Home() {
  // const [Postopen, setPostopen] = useState(false);

  // const handleClickOpenPost = () => {
  //   setPostopen(true);
  // };
  // const handleClosePost = () => {
  //   setPostopen(false);
  // };
  return (
    <div className="app">
      <Topbar />
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-0">
        <Sidebars />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 feeds" style={{position:'relative'}}>
        <Feed/>
        {/* <button className="addBtnCommon" onClick={handleClickOpenPost}><AddCircleIcon className="addpostBtn"/></button> */}
        </div>
        <div className="col-lg-3 col-md-3 col-sm-0">
        <Rightbar className="responsiveright"/>
        </div>
      </div>
      {/* <PostSharePopUp
          Postopen={Postopen}
          handleClosePost={handleClosePost}
      >
      </PostSharePopUp> */}
    </div>
  );
}
