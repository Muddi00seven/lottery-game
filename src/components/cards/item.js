import React from 'react'

const CardItem = ({ data }) => {
    return (
        <div>
            <div className="column">
                <div className="card">
                    <div className="lottercard-top-container">
                    <h3 className="lottercard-current-part">Current participants: {data.participants}</h3>
                    <h3 className="lottercard-max-part">Max participants: {data.maxparticipants}</h3>
                    </div>
                 
                    <h3 className="lottercard-">Contribution amount {data.amount}</h3>
                    <div className="lottercard-">
                        <button className="lottercard-">
                            Draw Winner
                    </button>
                        <button className="lottercard-">
                            Enter Lotto
                    </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardItem
