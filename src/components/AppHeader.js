import { Grid, Button } from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";

function AppHeader() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={2}><Link to="/home">Picture Chain</Link></Grid>
            <Grid item xs={8}/>
            <Grid item xs={2}><Button variant="outlined">Login</Button></Grid>
        </Grid>
    )
}

export default AppHeader;