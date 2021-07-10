import React from 'react';
import './PackCard.css';
import { Link } from 'react-router-dom';

const PackCard = ({name, pack }) => {
    return (
        <Link className='card' to={`/pack${pack.id}`}>
            <p>{name}</p>
            <p>started!</p>
        </Link>
    )
}

export default PackCard;