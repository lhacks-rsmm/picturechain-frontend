import { Modal, TextField, Typography, Stack, Button } from "@mui/material";
import { useState } from "react";

export default function AuthModal(props) {
    const [username, setUsername] = useState("");

    const handle = () => {
        props.setCookie("Name", username, { path: "/"});
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
