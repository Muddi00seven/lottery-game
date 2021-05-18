import React, { useEffect } from "react";
import './topSection.css';
import SecondNav from '../header/SecondNav';
import { useStore } from '../../context/GlobalState'
import { loadBlockchain } from '../../store/asyncActions';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Logo from '../../images/logo.jpg'


function getModalStyle() {
    const top = 40;
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
        width: 500,
        textAlign: "center",
        backgroundColor: "#ffffeb",
        borderRadius: "30px 30px 30px 30px",
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        alignItems: "center",

    },
}));

const TopSection = () => {
    const [{ web3, accounts,allowance }, dispatch] = useStore();
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [openApprove, setOpenApprove] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleApproveOpen = () => {
        setOpenApprove(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleApproveClose = () => {
        setOpenApprove(false);
    };

    useEffect(() => {
        if (web3 == null) {

            handleOpen()
        }
    }, [])
    useEffect(() => {
        if ( allowance  <= 0   && web3 != null) {
            handleApproveOpen()

        }
    }, [web3])

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">WELCOME </h2>
            <img src={Logo} width={150} />
            <h3 id="simple-modal-description">
                You must need an Ethereum Wallet to use the WELSI CORGI.
        </h3>
            <p id="simple-modal-description">

            </p>
        </div>
    );
    const body1 = (
        <div style={modalStyle} className={classes.paper}>
            <h1 id="simple-modal-title" style={{color:"red"}}>ALERT! </h1>
            <img src={Logo} width={150} />

            <h3 id="simple-modal-description">
              APPROVE IS REQUIRED BEFORE JOINING THE POOL.
            </h3>
        </div>
    );
    return (
        <>
            {
                web3 == null ?
                    //     <li className="navLink connect" >
                    //     <a href="#white-paper">Craate Lottery Pool</a>
                    //   </li> 
                    ""
                    :
                    <>
                        <div>
                            <SecondNav />
                        </div>
                        <div className="topsection-container">
                            <h2 className="topsection-heading">Lottery Pools</h2>
                        </div>
                    </>
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
            <Modal
                open={openApprove}
                onClose={handleApproveClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body1}
            </Modal>

        </>
    )
}

export default TopSection
