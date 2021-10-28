import React, { useState, useEffect } from "react";
import { getAllUserItems, deleteUserItem } from "../modules/UserItemManager";
import { UserItemCard } from "./UserItemCard";
import { useHistory } from "react-router";
import "./items.css"

export const UserItemList = () => {
    const [userItems, setUserItems] = useState([]);
    const history = useHistory();
    const getUserItems = () => {
        return getAllUserItems().then(userItemsFromAPI => {
            setUserItems(userItemsFromAPI);
        });
    };

    const handleDeleteUserItem = (id) => {
        deleteUserItem(id)
            .then(() => getAllUserItems().then(setUserItems));
    };

    useEffect(() => {
        getUserItems();
    }, []);

    return (
        <>
        <button type="button"
                        className="button"
                        onClick={() => { history.push("/items/create") }}>
                        Add Item
                    </button>
        <div className="display">
        <div className= "holders">
            <div className="card-holder">
                <div className="cardHolderHeader">
                </div>
                <div className="container-cards">
                    {userItems.map(userItem =>
                        <UserItemCard key={userItem.id} userItem={userItem} handleDeleteUserItem={handleDeleteUserItem} />)}

                </div>
            </div>
            </div>
            </div>
        </>
    );
};