import React, { useReducer } from 'react';
import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NASA from '../NASA.png'
const {useState} = React;

const Comment = ({comments, setComments, postIdx}) => {
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Clicked", message)
        let newComms = [...comments]
        newComms[postIdx].push(message)
        console.log(newComms)
        setComments(newComms)

    }

    return (
        <>
            {comments[postIdx]?.map((c) => (
                <p>{c}</p>
            ))}
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <form onSubmit={handleSubmit} >
                    <TextField id="input-with-sx" label="Write a comment!" variant="standard" onInput={e => setMessage(e.target.value)} />
                </form>
            </Box>
        </>
    )
}

export default Comment;