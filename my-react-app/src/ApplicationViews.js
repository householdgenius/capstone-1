
// import { TaskForm } from "./tasks/TaskForm"
// import { TaskList } from "./tasks/TaskList"
// import { TaskEditForm } from "./tasks/TaskEditForm"
import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
// import { NavBar } from "./nav/NavBar"
// import "./applicationViews.css"
// import "./nav/NavBar.css"

export const ApplicationViews = () => {


    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("capstone_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("capstone_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("capstone_user") !== null)
    }

    return (
        <>
            <div className="dashboard">

                <Route exact path="/tasks">
                

                </Route>
                <Route exact path="/tasks/create">
                    
                </Route>
                <Route path="/tasks/:taskId(\d+)/edit">
                    
                </Route>
                <Route path="/login">
                    <Login setAuthUser={setAuthUser} />
                </Route>

                <Route path="/register">
                    <Register setAuthUser={setAuthUser} />
                </Route>
            </div>
        </>

    )
}
