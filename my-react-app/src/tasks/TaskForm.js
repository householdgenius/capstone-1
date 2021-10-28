import React, { useState} from "react";
import { useHistory } from "react-router";
import {  addTask } from '../modules/TaskManager'
import "./TaskForm.css"
export const TaskForm = () => {
    const [task, setTask] = useState({
        name: "",
        date: "",
        description: "",
        notes: "",
        completed: false
    });

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newTask = { ...task }
        const currentUser = parseInt(sessionStorage.getItem("capstone_user"))
        let selectedVal = event.target.value
        if (event.target.id.includes(" ")) {
            selectedVal = parseInt(selectedVal)
        }
        newTask[event.target.id] = selectedVal
        newTask.userId = currentUser
        setTask(newTask)
    }

    const handleClickSaveTask = (event) => {
		event.preventDefault()
            addTask(task)
                .then(() => history.push("/tasks"))
    }
     
    return (
		<form className="form-group">
			<fieldset>
			<h2 className="taskForm__title">New Task</h2>
				<div className="form-group">
					<label htmlFor="name">Task:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task Name" value={task.name} />
				</div>
			
		
				<div className="form-group">
					<label htmlFor="date">Expected Completion Date:</label>
					<input type="date" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Expected Completion Date" value={task.date} />
				</div>
			
				<div className="form-group">
					<label htmlFor="description">description:</label>
					<input type="text" id="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Description" value={task.description} />
				</div>
		
        
				<div className="form-group">
					<label htmlFor="notes">Notes:</label>
					<input type="text" id="notes" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Notes" value={task.notes} />
					<button className="btn btn-primary" onClick={handleClickSaveTask}>Save Task
          </button>
				</div>
			</fieldset>
		
		</form>
	)
};