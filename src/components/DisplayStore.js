import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addShops, removeShops, completeShops } from '../redux/reducer';
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
        completeShop: (id) => dispatch(completeShops(id))
    }
}

const DisplayStore = (props) => {

    const [sort, setSort] = useState("active")
    const [category, setCategory] = useState("category")
    const handleCategory = (e) => {
        console.log('sdfsdfsdf', e.target.value)
        setCategory(e.target.value);
    }

    return (
        <div className="displaytodos">
            <div className="buttons">
                <button onClick={() => setSort("active")}>Active</button>
                <button onClick={() => setSort("complete")}>Completed</button>
                <button onClick={() => setSort("all")}>All</button>

                <select className="location" id="filtercatergory" name="category" onChange={(e) => handleCategory(e)} >
                    <option value="Grocery">Grocery</option>
                    <option value="butcher">Butcher</option>
                    <option value="chemisty">Chemisty</option>
                    <option value="baker">baker</option>
                </select>
            </div>
            <ul>
                {
                    props.shops.length > 0 && sort === "active" ?
                        props.shops.map(item => {
                            return (
                                item.completed === false &&
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
                    props.shops.length > 0 && sort === "complete" ?
                        props.shops.map(item => {
                            return (
                                item.completed === true &&
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

                {
                    props.shops.catergory > 0 && sort === "item.catergory" ?
                        props.shops.map(item => {
                            return (
                                item.complete === item.catergory &&
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
