import React, { useReducer } from 'react';
// const {useState, useEffect} = React;
import Button from '@mui/material/Button';
import { Card, CardMedia, Typography, Zoom } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NASA from '../NASA.png'




const Post = ({post, postIdx, likes, setLikes }) => {

    const boxDesign = {
        border: '1px solid grey', 
        borderRadius: '12px',
        boxShadow: 1,
        width: '65%',
        margin: '2% 2%'
    }
    const formatDate = (date) =>{
        let formatted = new Date(date)
        console.log(formatted.toDateString())
        return formatted.toDateString()
    }
    return (
        <>
            {/* <Button variant="contained">Hello World</Button> */}
            <Card sx={boxDesign} >
                <CardMedia sx={{display:'flex',justifyContent:'center'}}>
                    <img src={NASA} alt="logo" style={{width:'35px', height:'30px'}} />
                    <Typography variant='h5'>{post.title}</Typography>
                </CardMedia>
                Published on: {formatDate(post.date)}
                <CardMedia component='img' image={post.url} alt="NASA" />
                {likes[postIdx] ?  
                <Zoom in={true}> 
                    <FavoriteIcon fontSize="large" cursor="pointer" sx={{ color: 'red' }} onClick={(e) => {
                        let temp = [...likes]
                        temp[postIdx] = false
                        setLikes(temp)
                    }} /> 
                </Zoom> :       
                    <FavoriteBorderOutlinedIcon fontSize="large" cursor="pointer" onClick={(e) => {
                        let temp = [...likes]
                        temp[postIdx] = true
                        setLikes(temp)
                    }} />
                }
                <Typography align={'left'} px={3} py={1}>{post.explanation}</Typography>
            </Card>
        </>
    )
}

export default Post;