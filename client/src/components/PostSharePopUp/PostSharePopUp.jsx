import React, {forwardRef, useContext, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import {
    PermMedia,
    Label,
    Room,
    EmojiEmotions,
    Cancel,
  } from "@material-ui/icons";
import "./PostSharePopUp.css";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const PostSharePopUp = ({ Postopen, handleClosePost }) => {

    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file, setFile] = useState(null);
  
    const submitHandler = async (e) => {
      e.preventDefault();
      const newPost = {
        userId: user._id,
        desc: desc.current.value,
      };
      if (file) {
        const data = new FormData();
        const fileName = Date.now() + file.name;
        data.append("name", fileName);
        data.append("file", file);
        newPost.img = fileName;
        console.log(newPost);
        try {
          await axios.post("https://backend.dchirp.com/api/upload", data);
        } catch (err) {}
      }
      try {
        await axios.post("https://backend.dchirp.com/api/posts", newPost);
        window.location.reload();
      } catch (err) {}
    };

    return (
        <div>
            <Dialog
        open={Postopen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClosePost}
        aria-describedby="alert-dialog-slide-description"
        className='dialog'
      >
        <div className="dialogWalletpost">
          <div className="closeBtnpost pb-2">
             <Button onClick={handleClosePost} className="text-white fs-6">X</Button>
          </div>
          <DialogContent className='alertWalletDivpost'>
            <DialogContentText id="alert-dialog-slide-description">
            <div className="sharepost">
                <div className="shareWrapperpost">
                    <div className="shareTop">
                    <img
                        className="shareProfileImg"
                        src="https://i.ibb.co/LnVM593/sam-guna-1540870501.jpg"
                        alt=""
                    />
                    <input
                        placeholder="What's in your mind "
                        className="shareInput"
                        ref={desc}
                    />
                    </div>
                    <hr className="shareHrpost" />
                    {file && (
                    <div className="shareImgContainer">
                        <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                        <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
                    </div>
                    )}
                    <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon" />
                        <span className="shareOptionText text-white">Photo or Video</span>
                        <input
                            style={{ display: "none" }}
                            type="file"
                            id="file"
                            accept=".png,.jpeg,.jpg"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                        </label>
                    
                        <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                        <span className="shareOptionText text-white">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton text-white" type="submit">
                        Share
                    </button>
                    </form>
                </div>
                </div>
             
            </DialogContentText>
          </DialogContent>
        </div>
      </Dialog>
        </div>
    );
};

export default PostSharePopUp;