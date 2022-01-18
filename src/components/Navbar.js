import React from "react";
import { AppBar, Typography,CardMedia } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import NASA from '../NASA.png'

const Navbar = () => {

    return (
        // <AppBar position="fixed" sx={{py: 2, textAlign:"center", flexDirection: 'row', display:"flex"}}>
         <AppBar position="fixed" sx={{py: 2, display:'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', textAlign:'center'}} > 
            <CardMedia sx={{display:'flex',justifyContent:'center'}}>
                <img src={NASA} alt="logo" style={{width:'50px', height:'40px'}} />
            </CardMedia>
            <Typography variant='h5' >Spacestagram: Images from the final frontier</Typography>
            {/* <Typography variant='h5'>Images from the final frontier</Typography> */}
            <AccountCircle fontSize='large'/>
        </AppBar>
    )
}

export default Navbar;