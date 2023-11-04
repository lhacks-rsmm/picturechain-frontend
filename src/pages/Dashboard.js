import {React, useState} from "react";
import { Grid, Typography } from "@mui/material";
import ImageArea from "../components/ImageArea";
import UserList from "../components/UserList";
import PromptForm from "../components/PromptForm";
import AppHeader from "../components/AppHeader";
import { useContext } from 'react';
import { LobbyContext } from '../context/LobbyContext';

function Dashboard(props) {
    const [currentImage, setCurrentImage] = useState("https://picsum.photos/800/600");
    const { id } = useContext(LobbyContext);

    return (
        <Grid container spacing={3} className="main-container">
            <Grid item xs={12}><AppHeader /></Grid>
            <Grid item xs={0} md={2}/>
            <Grid item xs={6}>
                <ImageArea currentImage={currentImage}/>
            </Grid>
            <Grid item xs={4}>
                <Typography>ID: {id}</Typography>
                <UserList />
            </Grid>
            <Grid item xs={12}>
                <PromptForm setCurrentImage={setCurrentImage}/>
            </Grid>
        </Grid>
      );
}

export default Dashboard;