import {React, useState} from "react";
import { Grid } from "@mui/material";
import ImageArea from "../components/ImageArea";
import UserList from "../components/UserList";
import PromptForm from "../components/PromptForm";
import AppHeader from "../components/AppHeader";

function Dashboard() {
    const [currentImage, setCurrentImage] = useState("https://picsum.photos/800/600");

    return (
        <Grid container spacing={3} className="main-container">
            <Grid item xs={12}><AppHeader /></Grid>
            <Grid item xs={0} md={2}/>
            <Grid item xs={6}>
                <ImageArea currentImage={currentImage}/>
            </Grid>
            <Grid item xs={4}>
                <UserList />
            </Grid>
            <Grid item xs={12}>
                <PromptForm setCurrentImage={setCurrentImage}/>
            </Grid>
        </Grid>
      );
}

export default Dashboard;