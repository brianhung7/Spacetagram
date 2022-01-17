import React, { useReducer } from 'react';
// const {useState, useEffect} = React;
import Button from '@mui/material/Button';
import { Card, CardMedia } from '@mui/material';
import { Box } from '@mui/material';


const Post = (props) => {

    // const boxDesign = {
    //     border: '1px solid grey', 
    //     borderRadius: '12px',
    //     boxShadow: 1,
    //     width: '75%',
    // }

    return (
        <>
            <Button variant="contained">Hello World</Button>
            {props.content.map((post) => (
                <Card>
                    <div>
                        {post.title}
                    </div>                 
                    <CardMedia component='img' image={post.url} alt="NASA" />
                    <div>
                        {post.explanation}
                    </div>   
                </Card>
            ))}
        </>
    )
}

export default Post;