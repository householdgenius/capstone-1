import React, { useState, useEffect } from "react";
import { getAllTasks, deleteTask } from "../modules/TaskManager";
import { TaskCard } from "./TaskCard";
import { useHistory } from "react-router";

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const history = useHistory();
    const getTasks = () => {
        return getAllTasks().then(tasksFromAPI => {
            setTasks(tasksFromAPI);
        });
    };

    const reload = () => {
        getTasks()
    }


    const handleDeleteTask = (id) => {
        deleteTask(id)
            .then(() => getAllTasks().then(setTasks));
    };
    
    // const incompleteTasks = tasks.filter(t => t.completed === false)
    useEffect(() => {
        getTasks();
    }, []);

    return (
		<>
        <div className="task-card-holder">
            <div className="taskcardHolderHeader">
			<button type="button"
				className="button"
				onClick={() => {history.push("/tasks/create")}}>
				Add Task
			</button>
            </div>
		<div className="container-cards">
			{tasks.map(task =>
				<TaskCard reload={reload} key={task.id} task={task} handleDeleteTask={handleDeleteTask} />)}

		</div>
        </div>
		</>
	);
};