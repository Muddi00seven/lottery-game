import React from 'react';
import CardItem from './item'
import './card.css';
import './card-R.css';
import './timer.css';

import {dummyData} from './data';

const LotteryCards = () => {
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
