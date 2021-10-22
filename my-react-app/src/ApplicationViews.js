
import { TaskList } from "./tasks/TaskList"
import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { TaskEditForm } from "./tasks/TaskEditForm"
import { TaskForm } from "./tasks/TaskForm"
import { UserItemList } from "./items/UserItemList"
import { ItemEditForm } from "./items/ItemEditForm"
import { ItemForm } from "./items/ItemForm"
import { ItemList } from "./items/ItemsList"
import {UserItemForm} from "./items/UserItemForm"
import {UserItemEditForm} from "./items/UserItemEditForm"
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
                {isAuthenticated ? <TaskList /> : <Redirect to="/login" />}
                </Route>
                <Route exact path="/tasks/create">
                    <TaskForm />
                </Route>
                <Route path="/tasks/:taskId(\d+)/edit">
                    <TaskEditForm />
                </Route>
                <Route exact path="/items">
                {isAuthenticated ? <UserItemList /> : <Redirect to="/login" />}
                {isAuthenticated ? <ItemList /> : <Redirect to="/login" />}
                </Route>
                <Route exact path="/items/create">
                    <ItemForm />
                </Route>
                <Route exact path="/userItems/:itemId(\d+)/create">
                    <UserItemForm />
                </Route>
                <Route path="/items/:itemId(\d+)/edit">
                    <ItemEditForm />
                </Route>
                <Route path="/userItems/:userItemId(\d+)/edit">
                    <UserItemEditForm />
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
