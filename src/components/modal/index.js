import React, { useEffect, useCallback, useState } from "react";
import "./modal.css";
import { makeStyles } from "@material-ui/core/styles";
import { Fade, Modal, Backdrop } from "@material-ui/core";
import { useStore } from "../../context/GlobalState";
import TextField from "@material-ui/core/TextField";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import Logo from '../../images/logo.jpg'
// import { buyTokensAsync, rateAsync } from '../../store/asyncActions';
// import CircleAlienImage from "../../images/area51.png";


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
    position: "absolute",
    width: 450,
    height: 480,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #ffffeb",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
    borderRadius: "30px 30px 30px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",


  },

  btn: {
    background: "#1077b3",
    borderRadius: "20px",
    color: "white",
    width: "100%",
    padding: "10px 10px",
    fontSize: "22px",
    marginTop: "10px",
    cursor: "pointer"
  }
}));

const ModalBox = ({ open }) => {
  const [{ web3, accounts, contract }, dispatch] = useStore();
  const [participants, setParticipants] = useState("0");
  const [minimumContribution, setMinimumContribution] = useState("0");

  const [rate, setRate] = useState("");

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const onSubmit = async () => {



    try {
      // await buyTokensAsync(account, accounts, contract, stringEtherToWei, dispatch);
    } catch (error) {
      console.log("error trax = ", error);
    }
  };



  console.log("this is modal rate", rate)
  return (
    <div>
      <>
        <div style={modalStyle} className={classes.paper}>
        <div>
          <img src={Logo} width={150}/>
          </div>
          <div className="modal-field-one-container">
            <TextField className="modal-field-one" id="filled-search" value={participants} label="participants" onChange={(e) => setParticipants(e.target.value)} type="text" variant="filled" />
          </div>
          <div className="modal-field-two-container"> 
            <TextField className="modal-field-two" id="filled-search" value={minimumContribution} label="minimumContribution" onChange={(e) => setMinimumContribution(e.target.value)} type="text" variant="filled" />
          </div>
          <button className={classes.btn}
          >
            Buy Now
          </button>
        </div>
      </>
    </div>
  );
};

export default ModalBox;
