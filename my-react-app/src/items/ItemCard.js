import React from "react"
import { useHistory } from "react-router"


export const ItemCard = ({userItem, item, handleDeleteItem}) => {
    const history = useHistory();


    const currentUser = parseInt(sessionStorage.getItem("capstone_user"))

    return (

        <div className="card">
            <div className="card-info">
                <h3>Item: {(item.name)}</h3>
                <p> Location {userItem.location}</p>
                <p>Description: {userItem.description}</p>
                {userItem.userId === currentUser && <div className="buttons">
                    <button className="button-7" type="button" onClick={() => handleDeleteItem(item.id)}>Delete</button>
                    <button className="button-7" type="button" onClick={() => history.push(`/items/${item.id}/edit`)}>Edit</button>
                </div>}

            </div>
        </div>
    );
}