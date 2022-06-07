import React, { useState } from 'react';
import './WalletLogin.css';
import WalletPopup from "../../components/WalletPopup/WalletPopup"
const WalletLogin = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='walletPage'>
            <div className="walletdiv">
                <h4>DSLSOCIAL</h4>
                <p><button className='walletloginbtn' onClick={handleClickOpen}>Login with wallet</button></p>
            </div>
            <WalletPopup
                open={open}
                handleClose={handleClose}
            >
            </WalletPopup>
        </div>
    );
};

export default WalletLogin;