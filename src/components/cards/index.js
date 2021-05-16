import React, { useEffect, useState } from 'react'
import CardItem from './item'
import './card.css';
import {dummyData} from './data';
import { useStore } from '../../context/GlobalState';


const LotteryCards = () => {
    const [{web3,accounts,lottocontract,lottoPools},dispatch] = useStore();
    useEffect(()=>{
        (async ()=>{
            if(web3 && lottoPools){
                console.log("Pool in Cards",lottoPools );
    
            }
        })();
    },[web3,lottoPools,lottocontract])
    console.log("Pool in Cards",lottoPools );
    let lotteryData = dummyData;
    return (
        <div className="lotter-cards-container">
            <div className="row">
            {
                lotteryData.map((data)=> (
                    <CardItem data={data} />
                ))
            }
            </div>
        </div>
    )
}

export default LotteryCards
