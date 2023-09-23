import React from "react";
import { Grid } from "@mui/material";
import ImageArea from "../components/ImageArea";
import UserList from "../components/UserList";
import PromptForm from "../components/PromptForm";
import AppHeader from "../components/AppHeader";

function Dashboard() {
    return (
        <Grid container spacing={3} className="main-container">
            <Grid item xs={12}><AppHeader /></Grid>
            <Grid item xs={8}>
                <ImageArea />
            </Grid>
            <Grid item xs={4}>
                <UserList />
            </Grid>
            <Grid item xs={12}>
                <PromptForm />
            </Grid>
        </Grid>
      );
}

export default Dashboard;