import { createContext, useReducer } from "react";

export const UsersContext = createContext();

export const userReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return { user: action.payload };
        default:
            return state;
    }
};

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, {
        user: null,
    });

    return (
        <UsersContext.Provider value = {{ ...state, dispatch }}>
            {children}
        </UsersContext.Provider>
    );
};