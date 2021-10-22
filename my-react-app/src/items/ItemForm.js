import React, { useState } from "react";
import { useHistory } from "react-router";
import {  addItem } from '../modules/ItemManager'

export const ItemForm = () => {
    const [item, setItem]= useState({
        name: "",
        id: 0
    })

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newItem = { ...item}
        const currentUser = parseInt(sessionStorage.getItem("capstone_user"))
        let selectedVal = event.target.value
        if (event.target.id.includes(" ")) {
            selectedVal = parseInt(selectedVal)
        }
        newItem[event.target.id] = selectedVal
        setItem(newItem)
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
                    <label htmlFor="date">Item:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Name" value={item.name} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveItem}>Save Item
            </button>
        </form>
    )
};