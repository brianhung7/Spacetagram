import React, { useReducer } from 'react';
// const {useState, useEffect} = React;


const Card = (props) => {

    return (
        <div>
            {props.content.map((post) => (
                <div>
                    <div>
                        {post.title}
                    </div>
                    <div>
                        {post.explanation}
                    </div>                    
                    <div>

                        <img src={post.url} alt="NASA"/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;