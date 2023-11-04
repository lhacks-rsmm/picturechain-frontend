import {React, useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";
import { useContext } from 'react';
import { LobbyContext } from '../context/LobbyContext';
import { UserContext } from '../context/UserContext';

function PromptForm(props) {
    const [inputValue, setInputValue] = useState("");
    const { id } = useContext(LobbyContext);
    const { user } = useContext(UserContext);

    async function Prompt()
    {
        let promptObj = {
            "lobbyID": id,
            "userID" : user,
            "message": inputValue
        };

        const apiURL = "http://127.0.0.1:8000" + "/prompt";

        const response = await (await fetch(apiURL, {
            method: "POST",
            body: JSON.stringify(promptObj),
            headers: {"Content-Type": "application/json"},
            mode: "cors"
        })).json();

        if (response !== null && response.result !== null) {
            props.setCurrentImage(response.result.data[0].url);
        }

        setInputValue("");
    }

    function handleSubmit(e) {
        e.preventDefault();

        Prompt();
      }

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={0} md={1}/>
                <Grid item xs={12} md={8}>
                    <TextField 
                        fullWidth
                        id="prompt-input" 
                        label="Prompt" 
                        variant="outlined" 
                        value={inputValue}
                        onChange={handleChange}>
                    </TextField>
                </Grid>
                <Grid item xs={12} md={3} 
                    container
                    justify={"center"}
                    alignItems={"center"}>
                    <Button 
                        type="submit" 
                        id="submit-button" 
                        variant="contained">Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default PromptForm;