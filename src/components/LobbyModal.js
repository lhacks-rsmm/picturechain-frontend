import { Modal, Typography, Stack, Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import LobbySelection from "./LobbySelection";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { LobbyContext } from '../context/LobbyContext';
import { UserContext } from '../context/UserContext';


export default function LobbyModal(props) {
    const [select, setSelect] = useState(null);
    const [ availableLobbies, setAvailableLobbies ] = useState([]);

    const navigate = useNavigate();

    const { lobbyDispatch } = useContext(LobbyContext);

    const { user } = useContext(UserContext);

    const handleJoin = () => {
        if (select !== null) {
            joinLobby()
        }
    };

    const handleCreate = () => {
        createLobby();
    };

    useEffect(() => {
        const apiURL = "http://127.0.0.1:8000" + "/getLobbies";
        async function fetchLobbies() {
            const response = await (await fetch(apiURL, {
                method: "GET",
                mode: "cors"
            })).json();
           
            setAvailableLobbies(response); 
        };
        fetchLobbies();
    }, []);

    const createLobby = async (type) => {
        const apiURL = "http://127.0.0.1:8000" + "/createLobby";

        const data = {userID: user, lobbyType: 0};

        const response = await (await fetch(apiURL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"},
            mode: "cors"
        })).json();

        if (response !== null) {
            lobbyDispatch({ type: 'SET_ID', payload: response.id });
            navigate("/dashboard");
        }
    }

    const joinLobby = async () => {
        const apiURL = "http://127.0.0.1:8000" + "/joinLobby";

        const data = {userID: user, lobbyID: select};

        const response = await (await fetch(apiURL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"},
            mode: "cors"
        })).json();

        if (response !== null) {
            lobbyDispatch({ type: 'SET_ID', payload: select });
            navigate("/dashboard");
        }
    }

    const lobbyList = availableLobbies.map((lobby) => {
        if (lobby.type == 0) {
            const isSelected = select == lobby.id ? "selected" : "not-selected"
            return <LobbySelection id={lobby.id} setSelect={setSelect} selected={isSelected}></LobbySelection>
        }
    });

    return (
        <Modal open={props.open} onClose={props.handleClose}>
            <Stack className="lobby-modal" gap={3}>
                <Typography variant="h5" textAlign="center">Lobbies</Typography>
                <Paper style={{height : 100, overflow:'auto'}}>
                    {lobbyList}
                </Paper>
                <Button variant="contained" className="modal-button" onClick={handleJoin}>Join</Button>
                <Button variant="contained" className="modal-button" onClick={handleCreate}>Create</Button>
            </Stack>
        </Modal>
    );
}
