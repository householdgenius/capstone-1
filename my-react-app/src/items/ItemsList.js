import React, { useState, useEffect } from "react";
import { getAllItems, deleteItem } from "../modules/ItemManager";
import { ItemCard } from "./ItemCard";
import { useHistory } from "react-router";
import "./items.css"
export const ItemList = () => {
    const [items, setItems] = useState([]);
    const history = useHistory();
    const getItems = () => {
        return getAllItems().then(itemsFromAPI => {
            setItems(itemsFromAPI);
        });
    };

    const handleDeleteItem = (id) => {
        console.log(id)
        deleteItem(id)
            .then(() => getAllItems().then(setItems));
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <>
        <div className= "holders">
            <div className="item-card-holder">
                <div className="cardHolderHeader">
                    <button type="button"
                        className="add-button"
                        onClick={() => { history.push("/items/create") }}>
                        Add Item
                    </button>
                </div>
                <div className="container-cards">
                    {items.map(item =>
                        <ItemCard key={item.id} item={item} handleDeleteItem={handleDeleteItem} />)}

                </div>
            </div>
            </div>
        </>
    );
};