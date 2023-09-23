import Grid from "@mui/system/Unstable_Grid/Grid";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import AppHeader from "../components/AppHeader";
import {Link} from "react-router-dom"


export default function Home() {
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
            <Grid item xs={1} />
            <Grid item xs={1} />
            <Grid item xs={10}>
                <Container className="featured-drawing" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Link to="/dashboard"><Button variant="contained" className="lobby-button" style={{ marginRight: '16px' }}>Public</Button></Link>
                    <Button variant="contained" className="lobby-button"  style={{ marginLeft: '16px' }}>Private</Button>
                </Container>
            </Grid>
            <Grid item xs={1} />
        </Grid>
        </>
    );
}
