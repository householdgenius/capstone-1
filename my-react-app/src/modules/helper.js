const [isAdmin, setIsAdmin] = useState(sessionStorage.getItem("capstone_user") !== isAdmin)

    export const setAdminUser = (user) => {
        sessionStorage.setItem("capstone_user", JSON.stringify(user))
        setIsAdmin(sessionStorage.getItem("capstone_user") !== isAdmin)
    }

    {isAdmin ? active : disabled }