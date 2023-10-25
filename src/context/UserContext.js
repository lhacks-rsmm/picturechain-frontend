import { createContext, useReducer } from "react";

export const UserContext = createContext();

const reducerMap = {
    "SET_USER": (state, action) => ({ user: action.payload })
};

export const userReducer = (state, action) => {
    const reducerFunc = reducerMap[action.type];

    return (reducerFunc !== null) ? reducerFunc(state, action) : state; 
};

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, {
        user: null
    });

    return (
        <UserContext.Provider value = {{ ...state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};