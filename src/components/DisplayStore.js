import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addShops, removeShops } from '../redux/reducer';
import StoreItem from './StoreItem';

const mapStateToProps = (state) => {
    return {
        shops: state
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        addShop: (obj) => dispatch(addShops(obj)),
        removeShop: (id) => dispatch(removeShops(id)),
    }
}

const DisplayStore = (props) => {

    const [sort, setSort] = useState("all")
    const [category, setCategory] = useState("category")
    const [location, setLocation] = useState("location")
    const handleCategory = (e) => {
        setCategory(e.target.value);
        setSort(null);
        setLocation(null)
    }

    const handleSort = () => {
        setSort("all")
        setCategory(null);

    }

    const selectLocation = (e) => {
        setSort(null);
        setCategory(null);
        setLocation(e.target.value)

    }

    return (
        <div className="displaytodos">

            <div className="buttons">


                <button onClick={() => handleSort()}>All</button>

                <select className="location" id="cars"
                    onChange={(e) => selectLocation(e)}
                >
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Thane">Thane</option>
                    <option value="Manali">Manali</option>

                </select>

                <select className="location" id="filtercatergory" name="category" onChange={(e) => handleCategory(e)} >
                    <option value="Grocery">Grocery</option>
                    <option value="butcher">Butcher</option>
                    <option value="chemisty">Chemisty</option>
                    <option value="baker">baker</option>
                </select>
            </div>
            <ul>
                {
                    props.shops.length > 0 && category != null ?
                        props.shops.map(item => {
                            return (
                                item.category === category &&
                                <StoreItem
                                    key={item.id}
                                    item={item}
                                    removeShop={props.removeShop}
                                    completeShop={props.completeShop}
                                />
                            )
                        }) : null
                }

                {
                    props.shops.length > 0 && location != null ?
                        props.shops.map(item => {
                            return (
                                item.location === location &&
                                <StoreItem
                                    key={item.id}
                                    item={item}
                                    removeShop={props.removeShop}
                                    completeShop={props.completeShop}
                                />
                            )
                        }) : null
                }



                {
                    props.shops.length > 0 && sort === "all" ?
                        props.shops.map(item => {
                            return (

                                <StoreItem
                                    key={item.id}
                                    item={item}
                                    removeShop={props.removeShop}
                                    completeShop={props.completeShop}
                                />
                            )
                        }) : null
                }
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapsDispatchToProps)(DisplayStore);
