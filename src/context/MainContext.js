import { createContext, useReducer } from "react";

export const MainContext = createContext();

const reducerMap = {
    "SET_USER": (state, action) => ({ user: action.payload }),
    "SET_LOBBY": (state, action) => ({ ...state, lobby: action.payload })
};

export const mainReducer = (state, action) => {
    const reducerFunc = reducerMap[action.type];

    return (reducerFunc !== null) ? reducerFunc(state, action) : state; 
};

export const MainContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, {
        user: null,
        lobby: null
    });

    return (
        <MainContext.Provider value = {{ ...state, dispatch }}>
            {children}
        </MainContext.Provider>
    );
};