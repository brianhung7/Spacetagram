import React from "react";
import { AppBar, Typography } from "@mui/material";

const Navbar = () => {

    return (
        <AppBar position="fixed" sx={{py: 2, textAlign:"center"}}>
            <Typography variant='h5'>Spacestagram: Image-sharing from the final frontier</Typography>
        </AppBar>
    )
}

export default Navbar;