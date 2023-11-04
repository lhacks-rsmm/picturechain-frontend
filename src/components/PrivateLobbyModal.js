import { Modal, Typography, Stack, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useUserContext } from "../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { LobbyContext } from '../context/LobbyContext';
import { UserContext } from '../context/UserContext';


export default function LobbyModal(props) {
    const [id, setId] = useState(null);

    const navigate = useNavigate();

    //const { lobby, lobbyDispatch } = useLobbyContext();
    const { lobbyDispatch } = useContext(LobbyContext);

    //const { dispatch } = useUserContext();
    const { user } = useContext(UserContext);

    const handleCreate = () => {
        createLobby();
    };

    const createLobby = async (type) => {
        const apiURL = "http://127.0.0.1:8000" + "/createLobby";

        const data = {userID: user, lobbyType: 1};

        const response = await (await fetch(apiURL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"},
            mode: "cors"
        })).json();

        console.log(response);

        if (response !== null) {
            lobbyDispatch({ type: 'SET_ID', payload: response.id });
            navigate("/dashboard");
        }
    }

    const handleJoin = () => {
        if (id !== null) {
            joinLobby()
        }
    };

    const joinLobby = async (type) => {
        const apiURL = "http://127.0.0.1:8000" + "/joinLobby";

        const data = {userID: user, lobbyID: id};

        const response = await (await fetch(apiURL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"},
            mode: "cors"
        })).json();

        console.log(response);

        if (response !== null && response.id == id) {
            lobbyDispatch({ type: 'SET_ID', payload: id });
            navigate("/dashboard");
        }
    }

    return (
        <Modal open={props.open} onClose={props.handleClose}>
            <Stack className="lobby-modal" gap={3}>
                <Typography variant="h5" textAlign="center">Nickname</Typography>
                <TextField
                    id="id-field"
                    type="text"
                    label=""
                    variant="outlined"
                    value={id}
                    onChange={(e) => {setId(e.target.value)}}
                />
                <Button variant="contained" className="modal-button" onClick={handleJoin}>Join</Button>
                <Button variant="contained" className="modal-button" onClick={handleCreate}>Create</Button>
            </Stack>
        </Modal>
    );
}
