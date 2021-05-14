import React from 'react';
import CardItem from './item'
import './card.css';
import {dummyData} from './data';

const LotteryCards = () => {
    let lotteryData = dummyData;
    return (
        <div>
            <div class="row">
            {
                lotteryData.map((data)=> (
                    <CardItem />
                ))
            }
            </div>
        </div>
    )
}

export default LotteryCards
