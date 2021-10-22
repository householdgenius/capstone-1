import React, { useState, useEffect } from "react";
import { getAllUserItems, deleteUserItem } from "../modules/UserItemManager";
import { UserItemCard } from "./UserItemCard";
import { useHistory } from "react-router";

export const UserItemList = () => {
    const [userItems, setUserItems] = useState([]);
    const history = useHistory();
    const getUserItems = () => {
        return getAllUserItems().then(userItemsFromAPI => {
            setUserItems(userItemsFromAPI);
        });
    };

    const handleDeleteUserItem = (id) => {
        console.log(id)
        deleteUserItem(id)
            .then(() => getAllUserItems().then(setUserItems));
    };

    useEffect(() => {
        getUserItems();
    }, []);

    return (
        <>
            <div className="card-holder">
                <div className="cardHolderHeader">
                </div>
                <div className="container-cards">
                    {userItems.map(userItem =>
                        <UserItemCard key={userItem.id} userItem={userItem} handleDeleteUserItem={handleDeleteUserItem} />)}

                </div>
            </div>
        </>
    );
};