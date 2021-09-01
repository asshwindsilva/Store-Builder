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
    return (
        <div className="displaytodos">
            <div className="buttons">
                <button onClick={() => setSort("active")}>Active</button>
                <button onClick={() => setSort("complete")}>Completed</button>
                <button onClick={() => setSort("all")}>All</button>
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
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapsDispatchToProps)(DisplayStore);
