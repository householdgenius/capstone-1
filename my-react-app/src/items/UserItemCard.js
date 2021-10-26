import React from "react"
import { useHistory } from "react-router"


export const UserItemCard = ({userItem, handleDeleteUserItem}) => {
    const history = useHistory();


    const currentUser = parseInt(sessionStorage.getItem("capstone_user"))

    return (

        <div className="card">
            <div className="card-info">
                <h3>Item: {userItem.item.name}</h3>
                <p> Location {userItem.location}</p>
                <p>Description: {userItem.description}</p>
                <div className="buttons">
                    <button
                     className="button-7" 
                     type="button" 
                     onClick={() => handleDeleteUserItem(userItem.id)} 
                     disabled= {currentUser === userItem.userId ? false : true} >Delete
                     </button>
                    <button 
                     className="button-7"
                     type="button" 
                     onClick={() => history.push(`/userItems/${userItem.id}/edit`)} 
                     disabled= {currentUser === userItem.userId ? false : true}>Edit
                     </button>
                </div>

            </div>
        </div>
    );
}