import { useState, createContext } from 'react'

export const UserContext = createContext({ user: {}, changeUser: ()=>{} });

const UserProvider = (props) => {
    let [user, setUser] = useState({});

    let changeUser = (user) => {
        setUser(user);
    }

    return (
        <UserContext.Provider value={({ user, changeUser })}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider
