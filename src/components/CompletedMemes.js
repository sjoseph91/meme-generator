import React from 'react';
import MemeBox from "./MemeBox";


export default function CompletedMemes({completedMemes, deleteMeme}){
    return (
        <div className="CompletedMemes">
            {completedMemes.map(meme => (
                <MemeBox 
                    info={meme}
                    key={meme.id}
                    deleteMeme={deleteMeme}
                />
            ))}
        </div>
    )
}