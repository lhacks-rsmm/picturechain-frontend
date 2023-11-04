import Grid from "@mui/system/Unstable_Grid/Grid";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import AppHeader from "../components/AppHeader";
import { createContext } from "react";
import { useUserContext } from "../hooks/useUserContext";
import { useEffect, useState, useContext } from "react";
import LobbyModal from "../components/LobbyModal";
import PrivateLobbyModal from "../components/PrivateLobbyModal"

export const GlobalConfig = createContext({
    BaseURL: process.env.REACT_APP_BASE_URL
});

export default function Home() {
    const [open, setOpen] = useState(false);
    const [privateOpen, privateSetOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handlePrivateOpen = () => privateSetOpen(true);
    const handlePrivateClose = () => privateSetOpen(false);

    const { user, userDispatch } = useUserContext();  

    //const config = useContext(GlobalConfig);

    return (
        <div>
        <LobbyModal open={open} handleClose={handleClose}/>
        <PrivateLobbyModal open={privateOpen} handleClose={handlePrivateClose}/>
        <Grid container spacing={3}>
            <Grid item xs={12}><AppHeader /></Grid>
            <Grid item xs={1} />
            <Grid item xs={10} className="img-container">
                <Container className="featured-drawing" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={process.env.PUBLIC_URL + '/images/img-3GnyG2AGnbEY8yzfAliOgfmv.png'} alt="Cannot Load" style={{height:'73vh'}}/>
                    <img src={process.env.PUBLIC_URL + '/images/img-zZfkp0rr2YQyoZCFOXsNshPq.png'} alt="Cannot Load" style={{height:'73vh'}}/>
                </Container>
                </Grid>
            <Grid item align xs={1} />
            <Grid item xs={3} />
            <Grid i tem xs={3}><Button variant="contained" className="lobby-button" onClick={handleOpen}>Public</Button></Grid>
            <Grid item xs={3}><Button variant="contained" className="lobby-button" onClick={handlePrivateOpen}>Private</Button></Grid>
            <Grid item xs={3} />
        </Grid>
        </div>

    );
}
