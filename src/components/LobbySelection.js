import { Typography } from "@mui/material";
import {Link} from "react-router-dom";
import {React, useState} from "react";

function LobbySelection(props) {
    const handle = () => {
        props.setSelect(props.id);
    };

    return (
        <>
            <Typography id="lobby-selection" onClick={handle} className={props.selected}>{props.id}</Typography>
        </>
    )
}

export default LobbySelection;