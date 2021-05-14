import React from 'react'

const CardItem = ({ data }) => {
    return (
        <div>
            <div className="column">
                <div className="card">
                    <h3>{data.creator}</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                    <div>
                    <button>
                        abc
                    </button>
                    <button>
                        abc
                    </button>
                </div>
                </div>
           
            </div>
        </div>
    )
}

export default CardItem
