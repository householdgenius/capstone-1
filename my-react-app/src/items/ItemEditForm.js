import React, { useState, useEffect } from "react"
import { getItemById, update } from "../modules/ItemManager"
import { useHistory, useParams } from "react-router"

export const ItemEditForm = () => {
  const [item, setItem] = useState({ name: ""});
  const [userItem, setUserItem] = useState({ location:"",description:""});
  const [isLoading, setIsLoading] = useState(false);

  const { itemId } = useParams();
  const history = useHistory();

  const handleFieldChange = event => {
    const stateToChange = { ...item };
    stateToChange[event.target.id] = event.target.value;
    setItem(stateToChange);
  };

  const handleFieldChange2 = event => {
    const stateToChange = { ...userItem };
    stateToChange[event.target.id] = event.target.value;
    setUserItem(stateToChange);
  };

  const updateExistingItem = event => {
    event.preventDefault()
    setIsLoading(true);

    const editedItem = {
      id: itemId,
      name: item.name,
      location: userItem.location,
      description: userItem.description,
      userId: parseInt(sessionStorage.getItem("capstone_user"))
    };

    update(editedItem)
      .then(() => history.push("/items")
      )
  }
  useEffect(() => {
    getItemById(itemId)
      .then(item => {
        setItem(item);
        setIsLoading(false);
      });
  }, [itemId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="name">Item</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={item.name}
            />
            <label htmlFor="date">Location</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange2}
              id="location"
              value={userItem.location}
            />
            <label htmlFor="date">Description</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange2}
              id="description"
              value={userItem.description}
            />
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingItem}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

