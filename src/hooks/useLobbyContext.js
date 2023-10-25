import { LobbyContext } from "../context/LobbyContext";
import { useContext } from "react";

export const useLobbyContext = () => {
    const context = useContext(LobbyContext);

    if (!context)
        throw Error("useLobbyContext must be used inside a LobbyContextProvider.");

    return context;
}

