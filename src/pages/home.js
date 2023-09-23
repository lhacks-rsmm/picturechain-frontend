import Grid from "@mui/system/Unstable_Grid/Grid";
import Button from "@mui/material/Button";
import AppHeader from "../components/AppHeader";
import {Link} from "react-router-dom"


export default function Home() {
    return (
        <>
        <Grid container spacing={3}>
        <Grid item xs={12}><AppHeader /></Grid>
            <Grid item xs={1} />
            <Grid item xs={10} className="img-container">
                <div style={{height: "512px", width:"512px"}} className="featured-drawing">

                Featured drawing
                </div>
                </Grid>
            <Grid item xs={1} />
            <Grid item xs={3} />
            <Grid item xs={3}><Link to="/dashboard"><Button variant="contained" className="lobby-button">Public</Button></Link></Grid>
            <Grid item xs={3}><Button variant="contained" className="lobby-button">Private</Button></Grid>
            <Grid item xs={3} />
        </Grid>
        </>
    );
}
