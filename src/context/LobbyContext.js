import { useContext, useReducer } from "react";
import { createContext } from "react";

export const LobbyContext = createContext();

const reducerMap = {
    SET_ID: (state, id) => ({ ...state, id })
};

export function lobbyReducer(state, action) {
    //return (reducerMap[action.type] !== null) ? reducerMap[action.type](state, action.payload) : state;
    if (action.type === 'SET_ID') {
        return { id: action.payload };
    }
    return state;
}

export const LobbyContextProvider = ({ children }) => {
    const [state, lobbyDispatch] = useReducer(lobbyReducer, {
        id: null//,
        //type: null,
        //usercount: null,
        //prompts: null
    });    

    return <LobbyContext.Provider value = {{ ...state, lobbyDispatch }}>
            {children}
        </LobbyContext.Provider>; 
}; 
