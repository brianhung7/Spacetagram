import React, { useReducer } from 'react';
// const {useState, useEffect} = React;
import Button from '@mui/material/Button';
import { Card, CardMedia } from '@mui/material';
import { Box } from '@mui/material';
import { getThemeProps } from '@mui/system';


const Post = ({post, postIdx, likes, setLikes }) => {

    const boxDesign = {
        border: '1px solid grey', 
        borderRadius: '12px',
        boxShadow: 1,
        width: '65%',
        margin: '2% 2%'
    }

    return (
        <>
            <Button variant="contained">Hello World</Button>
            {/* {props.content.map((post) => (
                <Card sx={boxDesign}>
                    <div>
                        {post.title}
                    </div>                 
                    <CardMedia component='img' image={post.url} alt="NASA" />
                    <div>
                        {post.explanation}
                    </div>  
                    <div>
                        {post.likes ? <div>liked</div> : <div>Not liked</div>}    
                    </div> 
                </Card>
            ))} */}
            {/* {props.post.explanation} */}
            <Card sx={boxDesign} >
                {post.title}
                <CardMedia component='img' image={post.url} alt="NASA" />
                {likes[postIdx] ? 
                <button onClick={(e) => {
                    let temp = [...likes]
                    temp[postIdx] = false
                    setLikes(temp)
                }}>UnLike</button> :                 
                <button onClick={(e) => {
                    let temp = [...likes]
                    temp[postIdx] = true
                    setLikes(temp)
                }}>Like</button> 
                }
                <p>{post.explanation}</p>

            </Card>
        </>
    )
}

export default Post;