import { setupWeb3, setupContract,updatePool, addEthereumAccounts, addTransaction, web3LoadingError } from "./actions";
import Web3 from "web3";
import { LOTTO_GAME__ABI, LOTTO_GAME_ADDRESS } from '../contract/Lottogame';

export const loadBlockchain = async (dispatch) => {
    try {
        console.log("Web3 = ", Web3);
        console.log("Web3.givenProvider = ", Web3.givenProvider);
        if (Web3.givenProvider) {
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            dispatch(setupWeb3(web3));
            const lottcontract = new web3.eth.Contract(LOTTO_GAME__ABI, LOTTO_GAME_ADDRESS);
            dispatch(setupContract(lottcontract));
            const accounts = await web3.eth.getAccounts();
            dispatch(addEthereumAccounts(lottcontract));
            console.log("contract = ", lottcontract);
            console.log("contract.methods = ", lottcontract.methods);
            
           await updatePools(lottcontract,dispatch);



        }
        else {
            dispatch(web3LoadingError("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"))
        }
    }
    catch (error) {
        console.log("Error in loading Web3 = ", error);
        if (error.code === 4001) {

            dispatch(web3LoadingError(error.message));
        }
    }
}
export const updatePools = async (lottoContract,dispatch) => {
    try{
    if (lottoContract){
    const poolList= await lottoContract.methods.getPools().call();
    var lottopools=[];

    console.log("List of Pools",poolList);
    for (var i=0; i<poolList.length;i++){
        const pool= await getPoolById(lottoContract,poolList[i]);
        lottopools.push(pool);
    }
    console.log("Pools List", lottopools);
    dispatch(updatePool(lottopools));
}
    }catch(error){
        console.log("Error, getting Pool",error);
    }
}


    export const getPoolById = async (lottoContract,id) => {

const pool= await lottoContract.methods.getPoolbyId(id).call();
return pool;
    }
