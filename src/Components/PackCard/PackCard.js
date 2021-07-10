import React from 'react';
import './PackCard.css';

const PackCard = ({name}) => {
    return (
        <section className='card'>
            <p>{name}</p>
        </section>
    )
}

export default PackCard;