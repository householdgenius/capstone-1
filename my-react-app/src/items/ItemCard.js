import React from "react"
import { useHistory } from "react-router"

export const ItemCard = ({item, handleDeleteItem}) => {

    const history = useHistory();
    return (

        <div className="card">
            <div className="card-info">
                <h3>Item: {(item.name)}</h3>
                <button type="button"
                        className="button-7"
                        onClick={() => { history.push(`/userItems/${item.id}/create`) }}>
                        track Item
                    </button>
                    <button className="button-7" type="button" onClick={() => handleDeleteItem(item.id)}>Delete</button>
                    <button className="button-7" type="button" onClick={() => history.push(`/items/${item.id}/edit`)}>Edit</button>
            </div>
        </div>
    );
}