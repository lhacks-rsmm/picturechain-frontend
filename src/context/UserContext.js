import { createContext, useReducer } from "react";

export const UserContext = createContext();

const reducerMap = {
    "SET_USER": (state, user) => ({ ...state, user })
};

export const userReducer = (state, action) => {
    //const reducerFunc = reducerMap[action.type];

    //return (reducerFunc !== null) ? reducerFunc(state, action) : state; 

    if (action.type === 'SET_USER') {
        return { user: action.payload };
    }
    return state;
};

export const UserContextProvider = ({ children }) => {
    const [state, userDispatch] = useReducer(userReducer, {
        user: null
    });

    return (
        <UserContext.Provider value = {{ ...state, userDispatch }}>
            {children}
        </UserContext.Provider>
    );
};