import React, { useEffect, useCallback, useState } from "react";
import "./modal.css";
import { makeStyles } from "@material-ui/core/styles";
import { Fade, Modal, Backdrop } from "@material-ui/core";
import { useStore } from "../../context/GlobalState";
import TextField from "@material-ui/core/TextField";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
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
    width: 350,
    height: 350,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
    borderRadius: "30px 30px 30px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",


  },
  textField: {
    width: "100%"
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
  const [etherAmount, setEtheAmount] = useState("0");
  const [rate, setRate] = useState("");

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const onSubmit = async () => {

    let etherToWei = etherAmount * 10e17;
    let stringEtherToWei = etherToWei.toString();
    const account = accounts[0];

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
