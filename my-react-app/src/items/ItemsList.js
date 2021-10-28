import React, { useState, useEffect } from "react";
import { getAllItems, deleteItem } from "../modules/ItemManager";
import { ItemCard } from "./ItemCard";
// import { useHistory } from "react-router";
import "./items.css"
export const ItemList = () => {
    const [items, setItems] = useState([]);
    // const history = useHistory();
    const getItems = () => {
        return getAllItems().then(itemsFromAPI => {
            setItems(itemsFromAPI);
        });
    };

    const handleDeleteItem = (id) => {
        deleteItem(id)
            .then(() => getAllItems().then(setItems));
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <>
        <div className="display">
        <div className= "holders">
            <div className="item-card-holder">
                <div className="cardHolderHeader">
                </div>
                <div className="container-cards">
                    {items.map(item =>
                        <ItemCard key={item.id} item={item} handleDeleteItem={handleDeleteItem} />)}

                </div>
            </div>
            </div>
            </div>
        </>
    );
};