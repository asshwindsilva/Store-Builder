
import React from 'react'
import { AiOutlineDelete, AiOutlineFileDone, AiOutlineClockCircle, AiFillTags } from "react-icons/ai"
import { GoLocation } from "react-icons/go"

const StoreItem = (props) => {
    const { item, removeShop, completeShop } = props
    return (
        <div className="card">

            <h2 key={item.id}>{item.item}</h2>
            <h3 key={item.id} > <GoLocation />{item.location}</h3>
            <h3 key={item.id} > <AiFillTags /> {item.category}</h3>
            <h3 key={item.id} > <AiOutlineClockCircle /> {item.openingTime} to {item.closingTime} </h3>
            <p> {item.item} is located in {item.location} and has been known for their {item.category} products</p>
            <div className="btns">
                <button
                    style={{ color: "red" }}
                    onClick={() => removeShop(item.id)}><AiOutlineDelete /></button>
                <button
                    style={{ color: "green" }}
                    onClick={() => completeShop(item.id)}><AiOutlineFileDone /></button>
            </div>
            {item.completed && <span className="completed">done</span>}
        </div>
    )
}

export default StoreItem
