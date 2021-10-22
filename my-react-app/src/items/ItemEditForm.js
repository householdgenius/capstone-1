import React, { useState, useEffect } from "react"
import { getItemById, update } from "../modules/ItemManager"
import { useHistory, useParams } from "react-router"

export const ItemEditForm = () => {
  const [item, setItem] = useState({name:"",id:0});
  const [isLoading, setIsLoading] = useState(false);

  const { itemId } = useParams();
  const history = useHistory();

  const handleFieldChange = event => {
    const stateToChange = { ...item };
    stateToChange[event.target.id] = event.target.value;
    setItem(stateToChange);
  };

  const updateExistingItem = event => {
    event.preventDefault()
    setIsLoading(true);

    const editedItem = {
      name: "",
      id: itemId
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
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={item.name}
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