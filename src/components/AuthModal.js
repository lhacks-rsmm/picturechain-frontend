import { Modal, TextField, Typography, Stack, Button } from "@mui/material";
import { useState } from "react";

export default function AuthModal(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log(username, password);
    }

    return (
        <Modal open={props.open} onClose={props.handleClose}>
            <Stack className="auth-modal" gap={3}>
                <Typography variant="h5" textAlign="center">Login</Typography>
                <TextField
                    id="name-field"
                    type="text"
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}
                />
                <TextField
                    id="pswd-field"
                    type="password"
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                <Button variant="contained" className="modal-button" onClick={handleLogin}>Login</Button>
            </Stack>
        </Modal>
    );
}
