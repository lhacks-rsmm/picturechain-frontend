import { Grid, Button } from "@mui/material";
import {Link} from "react-router-dom";
import {React, useState} from "react";
import AuthModal from "./AuthModal";

function AppHeader() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <AuthModal open={open} handleClose={handleClose}/>
            <Grid container spacing={3}>
                <Grid item xs={2}><Link to="/home">Picture Chain</Link></Grid>
                <Grid item xs={8}/>
                <Grid item xs={2}><Button variant="outlined" onClick={handleOpen}>Login</Button></Grid>
            </Grid>
        </>
    )
}

export default AppHeader;