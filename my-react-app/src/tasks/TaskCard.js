import React from "react"
import { useHistory } from "react-router"
import { taskComplete } from "../modules/TaskManager";


export const TaskCard = ({ task, reload, handleDeleteTask }) => {
    const history = useHistory();

    const handleCheckboxComplete = (event) => {
        taskComplete(task).then(reload)
    }

    const currentUser = parseInt(sessionStorage.getItem("capstone_user"))

    return (

        <div className="card">
            <div className="card-info">
                <h3>Task: {(task.name)}</h3>
                <p> Expected Completion Date: {task.date}</p>
                <p>Description: {task.description}</p>
                <p>Notes: {task.notes}</p>
                {task.userId === currentUser && <div className="complete"><label htmlFor="complete">complete
                    <input onChange={handleCheckboxComplete} type="checkbox" name="complete" id="complete"></input>
                </label> </div>}
                {task.userId === currentUser && <div className="buttons">
                    <button className="button-7" type="button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    <button className="button-7" type="button" onClick={() => history.push(`/tasks/${task.id}/edit`)}>Edit</button>
                </div>}

            </div>
        </div>
    );
}