import Grid from "@mui/system/Unstable_Grid/Grid";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import AppHeader from "../components/AppHeader";
import { useUserContext } from "../hooks/useUserContext";
import { json } from "react-router-dom";

export default function Home() {
    const { user } = useUserContext();

    const createLobby = async (type) => {
        const apiURL = "http://127.0.0.1:8000/createLobby";

        const data = {userID: user, lobbyType: type};
        console.log(data);
        console.log(JSON.stringify());

        const response = await (await fetch(apiURL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"},
            mode: "cors"
        })).json();

        console.log(response);
    }

    return (
        <>
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
            <Grid item xs={3}><Button variant="contained" className="lobby-button" onClick={() => createLobby(0)}>Public</Button></Grid>
            <Grid item xs={3}><Button variant="contained" className="lobby-button">Private</Button></Grid>
            <Grid item xs={3} />
        </Grid>
        </>
    );
}
