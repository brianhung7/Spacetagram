import React from 'react';
import Post from './Post';
import { Container,CircularProgress, Button } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const {useState, useEffect} = React;


const Feed = () => {
    const [content, setContent] = useState(null)
    const [likes, setLikes] = useState([])
    const [page, setPage] = useState(12)
    const [comments, setComments] = useState([])
    // const url = 'https://api.nasa.gov/planetary/apod?api_key=Lsggm1T1vkPp5eU3FfpsdZktg6NTAbFgtQRExXWG'
    const api = `https://api.nasa.gov/planetary/apod?start_date=2019-10-${page}&end_date=2019-10-${page + 4}&api_key=Lsggm1T1vkPp5eU3FfpsdZktg6NTAbFgtQRExXWG`
    const fetchData = async(url) =>{
        await fetch(url)
        .then(res => res.json())
        .then(data => {
            setContent(data)
            setLikes(data.map(post => false))
            setComments(data.map(post => []))
        })
    }

    const updatePage = (str) =>{
        setContent(null)
        let newPage = page
        if(str === 'increase'){
            newPage += 5
        } else if (str === 'decrease'){
            newPage -= 5
        }
        if(newPage > 30 || newPage < 3){
            newPage = 2
        }
        setPage(newPage)
    }

    useEffect(() => {
        fetchData(api);
    },[page]);

    return (
        <Container align="center" sx={{my:10}}>
            <Button style={{
                position: 'fixed',
                top: '50%',
                left: '10%',
                transform: 'translate(-50%, -50%),'
            }} variant="contained" disabled={page < 5} startIcon={<KeyboardDoubleArrowLeftIcon />} onClick={() => {updatePage('decrease')}}>Previous</Button>

            <Button style={{
                position: 'fixed',
                top: '50%',
                left: '85%',
                transform: 'translate(-50%, -50%),'
            }}variant="contained" disabled={page > 26} endIcon={<KeyboardDoubleArrowRightIcon />}onClick={() => {updatePage('increase')}}>Next</Button>

            {content ? <div>
            { content.map((post, postIdx) => (
                <Post key={postIdx} post={post} postIdx={postIdx} likes={likes} setLikes={setLikes} comments={comments} setComments={setComments}/>
            ))} 
            </div>: 
            <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%),'
            }}><CircularProgress /></div>
        }
            
        </Container>

    )
}

export default Feed;