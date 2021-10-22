import React from "react"
import { useHistory } from "react-router"


export const UserItemCard = ({userItem, handleDeleteUserItem}) => {
    const history = useHistory();


    const currentUser = parseInt(sessionStorage.getItem("capstone_user"))

    return (

        <div className="card">
            <div className="card-info">
            <p> Item: {userItem.name}</p>
                <p> Location {userItem.location}</p>
                <p>Description: {userItem.description}</p>
                {userItem.userId === currentUser && <div className="buttons">
                    <button className="button-7" type="button" onClick={() => handleDeleteUserItem(userItem.id)}>Delete</button>
                    <button className="button-7" type="button" onClick={() => history.push(`/userItems/${userItem.id}/edit`)}>Edit</button>
                </div>}

            </div>
        </div>
    );
}