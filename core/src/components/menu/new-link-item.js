import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"

export default function addNew({label,to,onClick}) {
    return (
      <MenuItem
        component={to?NavLink:"li"}
        to={to}
        onClick={onClick}
        activeClassName={"active"}
      >
      <Box display="flex" ml={1} justifyContent="center" alignItems="center">
       <AddIcon color="primary"  />
       <Typography variant="body2" color="primary" ml={1}>{label}</Typography>
       </Box>
      </MenuItem>
    );
  }