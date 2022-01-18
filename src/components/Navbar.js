import React from "react";
import { AppBar, Typography } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';

const Navbar = () => {

    return (
        // <AppBar position="fixed" sx={{py: 2, textAlign:"center", flexDirection: 'row', display:"flex"}}>
         <AppBar position="fixed" sx={{py: 2, display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign:'center'}} > 
            <Typography variant='h5'>Spacestagram: Image-sharing from the final frontier</Typography>
            <AccountCircle />
        </AppBar>
    )
}

export default Navbar;