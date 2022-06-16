import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DslsocialContext } from '../../context/DslsocialContext';
import Feed from '../feed/Feed';
import WalletPopUp from '../WalletPopup/WalletPopup';

const ProfileFeed = () => {
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
                src={user.coverPicture ?
                    user.coverPicture
                    :
                    "https://i.ibb.co/8YSJ28H/600x200.jpg"
                }
                alt=""
              />
              <button className='phoneWallet btn btn-danger' onClick={handleClickOpen}>login with wallet</button>
              <img
                className="profileUserImg"
                src= {user.profilePicture?
                    user.profilePicture
                    :
                    "https://i.ibb.co/w7qb5km/maleprofile.jpg"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Name Of User</h4>
              <span className="profileInfoDesc">About User</span>
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

export default ProfileFeed;