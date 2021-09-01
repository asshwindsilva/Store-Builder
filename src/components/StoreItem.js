
import React from 'react'

const StoreItem = (props) => {
    const { item, removeShop, completeShop } = props
    return (
        <div className="content" className="card">

            <h2 key={item.id}>{item.item}</h2>


            <h2 key={item.id} > {item.location}</h2>


            <h2 key={item.id} > {item.category}</h2>


            <h2 key={item.id} > {item.openingTime}</h2>

            <p>Every shop is defined and has a being know for their products</p>

            <h2 key={item.id} > {item.closingTime}


            </h2>
            <div className="btns">
                <button onClick={() => removeShop(item.id)}>Delete</button>
                <button onClick={() => completeShop(item.id)}>complete</button>
            </div>
            {item.completed && <span className="completed">done</span>}




        </div>
    )
}

export default StoreItem
