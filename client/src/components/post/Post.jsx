import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
  // const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  // useEffect(() => {
  //   setIsLiked(post.likes.includes(currentUser._id));
  // }, [currentUser._id, post.likes]);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`/users?userId=${post.userId}`);
  //     setUser(res.data);
  //   };
  //   fetchUser();
  // }, [post.userId]);

  // const likeHandler = () => {
  //   try {
  //     axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
  //   } catch (err) {}
  //   setLike(isLiked ? like - 1 : like + 1);
  //   setIsLiked(!isLiked);
  // };
  return (
    <div className="post">
      <div className="postWrapper mb-3">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to="/profile/username">
              <img
                className="postProfileImg"
                src={
                  user.profilePicture?
                  user.profilePicture
                  :
                  "https://i.ibb.co/w7qb5km/maleprofile.jpg"
                }
                // src={
                //   user.profilePicture
                //     ? PF + user.profilePicture
                //     : PF + "person/noAvatar.png"
                // }
                alt=""
              />
            </Link>
            <span className="postUsername">username</span>
            <span className="postDate">postdate</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
        <span className="postText">static post</span> 
          {/* <span className="postText">{post?.desc}</span> */}
          <img className="postImg" src="https://i.ibb.co/LnVM593/sam-guna-1540870501.jpg" alt="" />
          {/* <img className="postImg" src={PF + post.img} alt="" /> */}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              // onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              // onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter"> people like it</span>
            {/* {like} */}
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> comments</span>
            {/* {post.comment} */}
          </div>
        </div>
      </div>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to="/profile/username">
              <img
                className="postProfileImg"
                src={
                  user.profilePicture?
                     user.profilePicture
                     :
                    "https://i.ibb.co/w7qb5km/maleprofile.jpg"
                }
                alt=""
              />
            </Link>
            <span className="postUsername">username</span>
            <span className="postDate">postdate</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
        <span className="postText">static post</span> 
          {/* <span className="postText">{post?.desc}</span> */}
          <img className="postImg" src="https://i.ibb.co/DrNvt1c/logo512.png" alt="" />
          {/* <img className="postImg" src={PF + post.img} alt="" /> */}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              // onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              // onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter"> people like it</span>
            {/* {like} */}
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> comments</span>
            {/* {post.comment} */}
          </div>
        </div>
      </div>
    </div>
  );
}
