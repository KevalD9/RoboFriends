import React from "react";

const Card = ({id, name, email}) => {
    return(
        <div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='Robotos' src={`https://robohash.org/KD/${id}?150x150}`}/>
            <div className='tc'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;