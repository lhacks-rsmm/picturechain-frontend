import Grid from "@mui/system/Unstable_Grid/Grid";
import Button from "@mui/material/Button";
import AppHeader from "../components/AppHeader";
import { useCookies } from "react-cookie";

export default function Home() {
    const [cookies, setCookie] = useCookies(["user"]);

    const createLobby = async (type) => {
        const apiURL = "https://571e-209-87-29-242.ngrok-free.app/createLobby";

        const data = {"userID": cookies.user, "lobbyType": type};

        const response = await fetch(apiURL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"},
        })

        console.log(response);
    }

    return (
        <>
        <Grid container spacing={3}>
        <Grid item xs={12}><AppHeader setCookie={setCookie}/></Grid>
            <Grid item xs={1} />
            <Grid item xs={10} className="img-container">
                <div style={{height: "512px", width:"512px"}} className="featured-drawing">

                Featured drawing
                </div>
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
