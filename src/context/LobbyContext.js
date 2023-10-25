import { useContext, useReducer } from "react";
import { createContext } from "react";

export const LobbyContext = createContext();

const reducerMap = {
};

export function lobbyReducer(state, action) {
    return (reducerMap[action.type] !== null) ? reducerMap[action.type](state, action.payload) : state;
}

export const LobbyContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(lobbyReducer, {
        id: null,
        type: null,
        usercount: null,
        prompts: null
    });    

    return <LobbyContext.Provider value = {{ ...state, dispatch }}>
            {children}
        </LobbyContext.Provider>; 
}; 
