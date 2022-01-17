import React from 'react';
import Card from './Card';
const {useState, useEffect} = React;


const Feed = () => {
    const [content, setContent] = useState([])
    // const url = 'https://api.nasa.gov/planetary/apod?api_key=Lsggm1T1vkPp5eU3FfpsdZktg6NTAbFgtQRExXWG'
    const url = 'https://api.nasa.gov/planetary/apod?start_date=2015-09-07&end_date=2015-09-08&api_key=Lsggm1T1vkPp5eU3FfpsdZktg6NTAbFgtQRExXWG'
    const fetchData = async() =>{

        fetch(url).then(res => res.json()).then(data => setContent(data))


    }

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <>
        <div>
            {/* {content[0] ? <div>{content[0].explanation}</div> : <div>...Loading</div>} */}
            <Card content = {content}/>
        </div>
        </>

    )
}

export default Feed;