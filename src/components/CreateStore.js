
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addShops, removeShops, completeShops } from '../redux/reducer';
import { GoPlus } from "react-icons/go"

const mapStateToProps = (state) => {
    return {
        shops: state
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        addShop: (obj) => dispatch(addShops(obj)),
        removeShop: (id) => dispatch(removeShops(id)),
        completeShop: (id) => dispatch(completeShops(id))
    }
}

const Form = (props) => {
    const [shop, setShop] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [openingTime, setOpeningTime] = useState("");
    const [closingTime, setClosingTime] = useState("");





    const handleChange = (e) => {
        setShop(e.target.value);
    }

    const handleLocation = (e) => {
        setLocation(e.target.value)
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleOpeningTime = (e) => {
        setOpeningTime(e.target.value)
    }

    const handleClosingTime = (e) => {
        setClosingTime(e.target.value)
    }

    console.log("props from shop", props)

    return (
        <div className="addshop">

            <label htmlFor="name">Name</label>
            <input id="name" type="text"
                onChange={(e) => handleChange(e)}
                className="shop-input"
            />
            <label htmlFor="location">Location</label>
            <select className="location" id="cars"
                onChange={(e) => handleLocation(e)}
            >
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Thane">Thane</option>
                <option value="Manali">Manali</option>

            </select>

            <label htmlFor="category">Category</label>
            <select className="location" id="catergory" name="category" onChange={(e) => handleCategory(e)}>
                <option value="Grocery">Grocery</option>
                <option value="butcher">Butcher</option>
                <option value="chemisty">Chemisty</option>
                <option value="baker">baker</option>
            </select>

            <label htmlFor="opening">opening time:</label>
            <input className="location" type="time" id="opening" onChange={(e) => handleOpeningTime(e)} ></input>
            <label htmlFor="closing">closing time:</label>
            <input className="location" type="time" id="closing" onChange={(e) => handleClosingTime(e)}  ></input>

            <button className="btn-add" onClick={() => props.addShop({
                id: Math.floor(Math.random() * 1000),
                item: shop, location, category, openingTime, closingTime,
                completed: false
            })} ><GoPlus /></button>
        </div >
    )

}

export default connect(mapStateToProps, mapsDispatchToProps)(Form)

