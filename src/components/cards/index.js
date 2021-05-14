import React from 'react';
import CardItem from './item'
import './card.css';
import {dummyData} from './data';

const LotteryCards = () => {
    let lotteryData = dummyData;
    return (
        <div>
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
