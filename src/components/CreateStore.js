
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addShops, removeShops } from '../redux/reducer';
import { GoPlus } from "react-icons/go"

const mapStateToProps = (state) => {
    return {
        shops: state
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        addShop: (obj) => dispatch(addShops(obj)),
        removeShop: (id) => dispatch(removeShops(id))
    }
}

const Form = (props) => {
    const [shop, setShop] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [openingTime, setOpeningTime] = useState("");
    const [closingTime, setClosingTime] = useState("");

    function calculateTotalMinutes(time) {
        const hoursAndMinutes = time.split(':');
        const hours = parseInt(hoursAndMinutes[0]);
        const minutes = parseInt(hoursAndMinutes[1]);
        const totalMinutes = minutes + (hours * 60);
        return totalMinutes;
    }


    const submitStore = (shop, location, category, openingTime, closingTime) => {
        const totalOpeningTimeInMinutes = calculateTotalMinutes(openingTime);
        const totalClosingTimeInMinutes = calculateTotalMinutes(closingTime);
        var regexp = /\d/g;

        if (shop === "") {
            alert("shop must have a name");
            return;
        }
        if (regexp.test(shop)) {
            alert("shop name must not contain numbers");
            return;
        }
        if (location === "") {
            alert("shop must have a location");
            return
        }

        if (category === "") {
            alert("shop must have a category");
            return
        }
        if (openingTime === "") {
            alert("shop must have a opening time");
            return
        }

        if (totalClosingTimeInMinutes < totalOpeningTimeInMinutes) {
            alert("Closing time must be greater than opening time");
            return
        }

        if (closingTime === "") {
            alert("shop must have a closing time");
            return
        }
        props.addShop({
            id: Math.floor(Math.random() * 1000),
            item: shop, location, category, openingTime, closingTime,
        })
    }


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
                <option value="">Select location</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Thane">Thane</option>
                <option value="Manali">Manali</option>

            </select>

            <label htmlFor="category">Category</label>
            <select className="location" id="catergory" name="category" onChange={(e) => handleCategory(e)}>
                <option value="">Select catergory</option>
                <option value="Grocery">Grocery</option>
                <option value="Sports">Sports</option>
                <option value="butcher">Butcher</option>
                <option value="chemisty">Chemisty</option>
                <option value="baker">baker</option>
            </select>

            <label htmlFor="opening">opening time:</label>
            <input className="location" type="time" id="opening" onChange={(e) => handleOpeningTime(e)} ></input>
            <label htmlFor="closing">closing time:</label>
            <input className="location" type="time" id="closing" onChange={(e) => handleClosingTime(e)}  ></input>


            <button className="btn-add" onClick={() => submitStore(shop, location, category, openingTime, closingTime)}><GoPlus /></button>
        </div >
    )

}

export default connect(mapStateToProps, mapsDispatchToProps)(Form)

