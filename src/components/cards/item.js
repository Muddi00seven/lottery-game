import React from 'react'

const CardItem = ({ data }) => {
    return (
        <div>
            <div className="column">
                <div className="card">
                    <h3>Current participants {data.participants}</h3>
                    <h3>Max participants {data.maxparticipants}</h3>
                    <h3>Contribution amount {data.amount}</h3>
                    <div>
                        <button>
                            Draw Winner
                    </button>
                        <button>
                            Enter Lotto
                    </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardItem
