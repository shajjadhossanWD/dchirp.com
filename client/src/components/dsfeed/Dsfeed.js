import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../feed/Feed';
import './Dsfeed.css';
import axios from "axios";
import WalletPopUp from '../WalletPopup/WalletPopup';
import { DslsocialContext } from '../../context/DslsocialContext';

const Dsfeed = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;
    const { user1, logOut} = useContext(DslsocialContext);

    useEffect(() => {
      const fetchUser = async () => {
        const res = await axios.get(`/users?username=${username}`);
        setUser(res.data);
      };
      fetchUser();
    }, [username]);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <div className='app'> 
        <div className="feed">        
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://i.ibb.co/8YSJ28H/600x200.jpg"
                alt=""
              />
              <button className='phoneWallet btn btn-danger' onClick={handleClickOpen}>login with wallet</button>
              <img
                className="profileUserImg"
                src="https://i.ibb.co/4VCJM72/e-Q8-Tk-Sg-S-400x400.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">DS Legends Pte. Ltd.</h4>
              <span className="profileInfoDesc text-center">We provide all required services to businesses who wants to convert their normal website to decentralised application.</span>
            </div>
            <div className="profileRightBottom">
             <Feed username={username} />
          </div>
          </div>
          {(!user1.walletAddress || user1.walletAddress === "undefined") &&
          <WalletPopUp
                open={open}
                handleClose={handleClose}
            >
            </WalletPopUp>}
        </div>
    );
};

export default Dsfeed;