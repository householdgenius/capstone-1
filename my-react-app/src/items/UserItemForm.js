import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import {  addUserItem } from '../modules/UserItemManager'

export const UserItemForm = () => {
    const [userItem, setUserItem]= useState({
        name: "",
        itemId: 0,
        location: "",
        description: "",
    })

    const history = useHistory();
    const {itemId} = useParams();

    const handleControlledInputChange = (event) => {
        const newUserItem = { ...userItem}
        const currentUser = parseInt(sessionStorage.getItem("capstone_user"))
        let selectedVal = event.target.value
        if (event.target.id.includes(" ")) {
            selectedVal = parseInt(selectedVal)
        }
        newUserItem[event.target.id] = selectedVal
        newUserItem.userId = currentUser
        setUserItem(newUserItem)
    }

    const handleClickSaveItem = (event) => {
        event.preventDefault()
        const newUserItem = {
            name: itemId.name,
            itemId: parseInt(itemId),
            location: userItem.location,
            description: userItem.description,
            userId: parseInt(sessionStorage.getItem("capstone_user"))
          };
        setUserItem(newUserItem)
        addUserItem(newUserItem)
            .then(() => history.push("/items"))

    }

    return (
        <form className="TaskForm">
            <h2 className="taskForm__title">New Item</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Last Seen:</label>
                    <input type="text" id="location" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location" value={userItem.location} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">description:</label>
                    <input type="text" id="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Description" value={userItem.description} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveItem}>Save Item
            </button>
        </form>
    )
};