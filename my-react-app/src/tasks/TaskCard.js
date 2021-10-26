import React from "react"
import { useHistory } from "react-router"
import { taskComplete } from "../modules/TaskManager";


export const TaskCard = ({ task, reload, handleDeleteTask }) => {
    const history = useHistory();

    const handleCheckboxComplete = (event) => {
        taskComplete(task).then(reload)
    }

    

    const currentUser = parseInt(sessionStorage.getItem("capstone_user"))
console.log(task)
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
                    <button 
                     className="button"
                     type="button" 
                     onClick={() => handleDeleteTask(task.id)}
                     disabled= {task.user.isAdmin && task.userId === currentUser ? false : true}>Delete
                     </button>
                    <button 
                     className="button" 
                     type="button" 
                     onClick={() => history.push(`/tasks/${task.id}/edit`)}
                     disabled= {task.user.isAdmin && task.userId === currentUser ? false : true}>Edit
                     
                     </button>
                </div>

            </div>
        
    );
}