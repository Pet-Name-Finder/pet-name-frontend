import React from 'react';
import './ViewPacks.css';
import data from '../../Data/Pack';
import PackCard from '../PackCard/PackCard';
//temporary place for data while we decide we are making the api call for this data

const ViewPacks = () => {
    const displayCards = data.packs.map(pack => {
        return (
            <PackCard
                pack={pack}
                name={pack.name}
                key={pack.id}
            />
        )
    })
    return (
      <NavLink to='/all-packs'>
        <main className='packs-container'>
            {displayCards}
        </main>
      </NavLink>
    )
}

export default ViewPacks;
