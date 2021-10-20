import React, { useState, useEffect } from "react"
import { getTaskById, update } from "../modules/TaskManager"
import { useHistory, useParams } from "react-router"

export const TaskEditForm = () => {
  const [task, setTask] = useState({ name: "", date: "", description: "", notes: "" });
  const [isLoading, setIsLoading] = useState(false);

  const { taskId } = useParams();
  const history = useHistory();

  const handleFieldChange = event => {
    const stateToChange = { ...task };
    stateToChange[event.target.id] = event.target.value;
    setTask(stateToChange);
  };

  const updateExistingTask = event => {
    event.preventDefault()
    setIsLoading(true);

    const editedTask = {
      id: taskId,
      name: task.name,
      expectedCompletion: task.date,
      description: task.description,
      notes: task.notes,
      status: false,
      userId: parseInt(sessionStorage.getItem("capstone_user"))
    };

    update(editedTask)
      .then(() => history.push("/tasks")
      )
  }
  useEffect(() => {
    getTaskById(taskId)
      .then(task => {
        setTask(task);
        setIsLoading(false);
      });
  }, [taskId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="name">Task</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={task.name}
            />
            <label htmlFor="date">Date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="date"
              value={task.date}
            />
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingTask}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

