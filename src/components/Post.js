import React, { useReducer } from 'react';
// const {useState, useEffect} = React;
import Button from '@mui/material/Button';
import { Card, CardMedia, Typography, Zoom } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';




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
                <Typography variant='h4'>{post.title}</Typography>
                Published on: {formatDate(post.date)}
                <CardMedia component='img' image={post.url} alt="NASA" />
                {likes[postIdx] ?  
                <Zoom in={true}> 
                    <FavoriteIcon cursor="pointer" sx={{ color: 'red' }} onClick={(e) => {
                        let temp = [...likes]
                        temp[postIdx] = false
                        setLikes(temp)
                    }} /> 
                </Zoom> :       
                    <FavoriteBorderOutlinedIcon cursor="pointer" onClick={(e) => {
                        let temp = [...likes]
                        temp[postIdx] = true
                        setLikes(temp)
                    }} />
                }

                <Typography px={3} py={2}>{post.explanation}</Typography>

            </Card>
        </>
    )
}

export default Post;