import {React, useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";

function PromptForm(props) {
    const [inputValue, setInputValue] = useState("");

    async function Prompt(message)
    {
        let promptObj = {
            "lobbyID": "", //TODO
            "userID" : "", //TODO
            "messages": message 
        };

        let request = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(promptObj)
        };


        let response = await fetch("http://127.0.0.1:8000", request);
        
        return response.json();
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        // TODO
        Prompt(inputValue).then((data) => { console.log(data.choices[0].message);});
    
        setInputValue("");
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