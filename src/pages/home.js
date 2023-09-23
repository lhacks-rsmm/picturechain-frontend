import Grid from "@mui/system/Unstable_Grid/Grid";
import Button from "@mui/material/Button";
import { useState } from "react";
import AuthModal from "../components/AuthModal";


export default function Home() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        <AuthModal open={open} handleClose={handleClose}/>
        <Grid container spacing={3}>
            <Grid item xs={2}>Picture Chain</Grid>
            <Grid item xs={8}/>
            <Grid item xs={2}><Button variant="outlined" onClick={handleOpen}>Login</Button></Grid>
            <Grid item xs={1} />
            <Grid item xs={10} className="img-container">
                <div style={{height: "512px", width:"512px"}}>

                Featured drawing
                </div>
                </Grid>
            <Grid item xs={1} />
            <Grid item xs={3} />
            <Grid item xs={3}><Button variant="contained">Public</Button></Grid>
            <Grid item xs={3}><Button variant="contained">Private</Button></Grid>
            <Grid item xs={3} />
        </Grid>
        </>
    );
}
