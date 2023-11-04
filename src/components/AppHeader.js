import { Grid, Button, Typography } from "@mui/material";
import {Link} from "react-router-dom";
import {React, useState} from "react";
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function AppHeader(props) {
    const { user } = useContext(UserContext);

    const conditionalContent = (user == null) ? (
        <Button variant="outlined" onClick={props.handleOpen} className="login-button">Login</Button>
    ) : (
        <Typography id="username">{user}</Typography>
    );

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={0} md={1}/>
                <Grid item xs={3}><Link to="/home" className="MuiTypography-root" ><Typography variant="h4">Picture Chain</Typography></Link></Grid>
                <Grid item xs={7} md={6}/>
                <Grid item xs={2}>{conditionalContent}</Grid>
            </Grid>
        </>
    )
}

export default AppHeader;