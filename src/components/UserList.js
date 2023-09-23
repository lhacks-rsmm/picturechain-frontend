import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export default function UserList(props) {
    return (
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="User 1" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="User 2" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}
