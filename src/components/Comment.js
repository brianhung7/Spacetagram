import React from 'react';
import Button from '@mui/material/Button';
import { Box, TextField, CardMedia, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';

const {useState} = React;

const Comment = ({comments, setComments, postIdx}) => {
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let newComms = [...comments]
        newComms[postIdx].push(message)
        setComments(newComms)
        e.target[0].value = ''
        setMessage('')

    }

    return (
        <CardMedia sx={{px:3}}>
            {comments[postIdx]?.map((c) => (
                <CardMedia sx={{display:'flex', alignItems: 'center'}}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <Typography sx={{ fontWeight: 'bold' }}>SpaceFan  </Typography>
                    <Typography>: {c} </Typography>
                </CardMedia>
            ))}
            <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingBottom:'3px' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <form onSubmit={handleSubmit} style={{display:'flex', alignItems: 'flex-end'}}>
                    <TextField id="input-with-sx" label="Write a comment!" variant="standard" onInput={e => setMessage(e.target.value)} />
                    <Button endIcon={<SendIcon />} size="small" variant="contained" type='submit' disabled={message === ''}>Post</Button>
                </form>
            </Box>
        </CardMedia>
    )
}

export default Comment;