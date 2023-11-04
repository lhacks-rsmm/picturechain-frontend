import { Modal, TextField, Typography, Stack, Button } from "@mui/material";
import { useState } from "react";
import { useUserContext } from "../hooks/useUserContext";
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function AuthModal(props) {
    const [username, setUsername] = useState(null);

    const { userDispatch } = useContext(UserContext);
    console.log(userDispatch);

    const handle = () => {
        if (username)  {
            userDispatch({ type: 'SET_USER', payload: username });
            props.handleClose();
        }
    };

    return (
        <Modal open={props.open} onClose={props.handleClose}>
            <Stack className="auth-modal" gap={3}>
                <Typography variant="h5" textAlign="center">Nickname</Typography>
                <TextField
                    id="name-field"
                    type="text"
                    label=""
                    variant="outlined"
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}
                />
                <Button variant="contained" className="modal-button" onClick={handle}>Ready!</Button>
            </Stack>
        </Modal>
    );
}
