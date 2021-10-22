import React, { useState, useEffect } from "react"
import { getUserItemById, update } from "../modules/UserItemManager"
import { useHistory, useParams } from "react-router"

export const UserItemEditForm = () => {
  const [userItem, setUserItem] = useState({name: "",itemId:0, location:"",description:""});
  const [isLoading, setIsLoading] = useState(false);

  const { userItemId } = useParams();
  const history = useHistory();

  const handleFieldChange = event => {
    const stateToChange = { ...userItem };
    stateToChange[event.target.id] = event.target.value;
    setUserItem(stateToChange);
  };
console.log(userItemId)
  const updateExistingItem = event => {
    event.preventDefault()
    setIsLoading(true);

    const editedUserItem = {
      id: userItemId,
      itemId: userItem.itemId,
      location: userItem.location,
      description: userItem.description,
      userId: parseInt(sessionStorage.getItem("capstone_user"))
    };

    update(editedUserItem)
      .then(() => history.push("/items")
      )
  }
  useEffect(() => {
    getUserItemById(userItemId)
      .then(item => {
        setUserItem(item);
        setIsLoading(false);
      });
  }, [userItemId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="location"
              value={userItem.location}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
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

