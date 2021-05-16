import React, { useEffect, useCallback, useState } from "react";
import "./header.css";
// import AOS from "aos";
import Logo from '../../images/logo.jpg';
// import { loadBlockchain, purchasedEtherAsync } from '../../store/asyncActions';
import { useStore } from '../../context/GlobalState'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {approve} from '../../store/asyncActions';

// import {getTimeAsync} from '../../store/asyncActions'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    height: 220,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
    borderRadius: "30px",
  },
}));

function Header() {
  // AOS.init();
  const [{ web3, accounts, claim, purchased, lottocontract }, dispatch] = useStore();
  
  useEffect(async()=>{
    if(lottocontract != null) {
  // await  getTimeAsync(contract, dispatch)

    }
  },[lottocontract])
  console.log("this is for contract", lottocontract)
  console.log("this is for purchased", purchased);
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [etherValue, seteEherValue] = React.useState("0");

  const sendRequest = useCallback(async () => {
    // loadBlockchain(dispatch);
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = async () => {
    let etherToWei = etherValue * 10e17;
    let stringEtherToWei = etherToWei.toString();
    const account = accounts[0];

    try {
      // await purchasedEtherAsync(accounts, contract, stringEtherToWei, dispatch);

      // setTransactionInprocess(false);
      // setTransactionSuccessful(true);
    } catch (error) {
      console.log("error trax = ", error);

    }
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Buy Now</h2>
      <TextField value={etherValue} onChange={(e) => seteEherValue(e.target.value)} />
      <div style={{ marginTop: "30px" }}>
        <button className="claimSection-btn" onClick={onSubmit}>
          Buy Tokens
                </button>
      </div>
    </div>
  );
  const handleApprove = async() => {
    try{
     let receipt = await approve(lottocontract,accounts);
    }
    catch(error) {
      console.log("error",error)
    }
  }

  return (
    <div className="container">
      <header
        className="header"
      >
        {/* <a href="/" >
          
        </a> */}
        <img src={Logo} className="logo" width={100} />
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu" style={{ fontSize: "15px" }}>
        {web3 == null ? 
          <li className="navLink connect" onClick={sendRequest}>
            <a>Connect wallet</a>
          </li>
          : ""}
        <li className="navLink connect" onClick={handleApprove}>
            <a>Approve</a>
          </li>
          <li className="navLink whitepaper">
            <a href="#white-paper">White Paper</a>
          </li>
          <li className="navLink whitepaper">
            <a href="#white-paper">Join Telegram</a>
          </li>

          {/* <li className="navLink">
            <a href="#contact">Contact</a>
          </li> */}
          {/* {web3 == null ? 

          <li className="navLink navLinkBtn">
            <a onClick={handleOpen}>Unlock Wallet</a>
          </li>
          :                   <li className="navLink navLinkBtn">
          <a onClick={handleOpenBuy}>BUY TRUMP</a>
          </li>

        } */}
        </ul>
      </header>

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >


        <ModalBox open={open}/>
      </Modal>

      <Modal
        open={openBuy}
        onClose={handleCloseBuy}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <BuyModalBox />
      </Modal> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default Header;
