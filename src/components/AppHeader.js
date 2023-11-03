import { Grid, Button, Typography } from "@mui/material";
import {Link} from "react-router-dom";
import {React, useState} from "react";
import AuthModal from "./AuthModal";

function AppHeader(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <AuthModal open={open} handleClose={handleClose}/>
            <Grid container spacing={3}>
                <Grid item xs={0} md={1}/>
                <Grid item xs={3}><Link to="/home" className="MuiTypography-root" ><Typography variant="h4">Picture Chain</Typography></Link></Grid>
                <Grid item xs={7} md={6}/>
                <Grid item xs={2}><Button variant="outlined" onClick={handleOpen} className="login-button">Login</Button></Grid>
            </Grid>
        </>
    )
}

export default AppHeader;