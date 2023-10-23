import { Box, useThemeProps } from "@mui/material";

export default function ImageArea(props){
    return (
        <Box sx={{ width: "512px", height: "512px"}} className="img-area"><img src={props.currentImage} alt="Cannot Load" style={{ width: "512px", height: "512px"}}/></Box>
    );
}