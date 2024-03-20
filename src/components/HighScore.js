import React, { useEffect, useState } from 'react';

const HighScore = ({ gameMode }) => {
    const [highScore, setHighScore] = useState(null);

    useEffect(() => {
        const storedHighScore = localStorage.getItem(`highScore_${gameMode}`);
        setHighScore(storedHighScore);
    }, [gameMode]);

    return (
        <div>
            High Score for {gameMode} mode: {highScore}
        </div>
    );
};

export default HighScore;
