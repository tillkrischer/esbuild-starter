import React, { useState } from 'react';
import './App.css'
import { Counter } from './Counter';

const LikeButton = () => {

    const [liked, setLiked] = useState(false)

    if (liked) {
        return <div>'You liked this.'</div>;
    }

    return (
        <button className="like" onClick={() => setLiked(true)}>
            Like
        </button>
    )
}

export const App = () => {
    return (
        <div>
            <h1>Headline</h1>
            <LikeButton />
            <Counter />
            <progress />
        </div>
    )
}

