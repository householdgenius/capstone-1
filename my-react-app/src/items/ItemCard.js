import React from "react"
import { useHistory } from "react-router"

export const ItemCard = ({item, handleDeleteItem}) => {

    const history = useHistory();

    const currentUser = parseInt(sessionStorage.getItem("capstone_user"))

    return (

        <div className="card">
            <div className="card-info">
                <h3>Item: {(item.name)}</h3>
                <button type="button"
                        className="button"
                        onClick={() => { history.push(`/userItems/${item.id}/create`) }}>
                        track Item
                    </button>
                    <button 
                     className="button"
                     type="button" 
                     onClick={() => handleDeleteItem(item.id)} disabled= {currentUser === item.userId ? false : true}>Delete
                     </button>
                    <button 
                     className="button" 
                     type="button" 
                     onClick={() => history.push(`/items/${item.id}/edit`)} 
                     disabled= {currentUser === item.userId ? false : true}>Edit
                     
                     </button>
            </div>
        </div>
    );
}