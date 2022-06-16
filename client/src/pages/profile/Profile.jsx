import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebars from "../../components/sidebars/Sidebars";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import ProfileFeed from "../../components/ProfileFeed/ProfileFeed";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <div className="app">
         <Topbar />
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-0">
            <Sidebars />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
            <ProfileFeed/>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-0">
            <Rightbar user={user}  className="responsiveright"/>
            </div>
        </div>
      
      </div>
  );
}
