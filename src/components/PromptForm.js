import {React, useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";

function PromptForm() {
    const [inputValue, setInputValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
    
        // TODO
        console.log("Submit");
    
        setInputValue("");
      }

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={10}>
                    <TextField 
                        id="prompt-input" 
                        label="Prompt" 
                        variant="outlined" 
                        value={inputValue}
                        onChange={handleChange}>
                    </TextField>
                </Grid>
                <Grid item xs={12} md={2}>
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