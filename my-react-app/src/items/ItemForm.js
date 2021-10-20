import React, { useState } from "react";
import { useHistory } from "react-router";
import {  addItem } from '../modules/ItemManager'

export const ItemForm = () => {
    const [item, setItem] = useState({
        name: "",
    });

    const [userItem, setUserItem]= useState({
        location: "",
        description: "",
    })

    const history = useHistory();

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
        addItem(item)
            .then(() => history.push("/items"))
    }

    return (
        <form className="TaskForm">
            <h2 className="taskForm__title">New Item</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Item:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Item Name" value={item.name} />
                </div>
            </fieldset>
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