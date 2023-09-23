import "./App.css";

import { Grid } from "@mui/material";
import ImageArea from "./components/ImageArea";
import UserList from "./components/UserList";

function App() {
    return (
      <Grid container spacing={3} className="main-container">
        <Grid item xs={8}>
          <ImageArea />
        </Grid>
        <Grid item xs={4}>
          <UserList />
        </Grid>
      </Grid>
    );
}

export default App;
