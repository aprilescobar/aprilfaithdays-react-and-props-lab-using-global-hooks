import React, { useState } from 'react';

export const PetsContext = React.createContext('');
export const FilterContext = React.createContext('');

const Store = ({children}) => {
    const [pets, setPets] = useState('');
    const [filter, setFilter] = useState('all');

    return (
        <>
            <PetsContext.Provider value={[pets, setPets]}>
            <FilterContext.Provider value={[filter, setFilter]}>
                {children}
            </FilterContext.Provider>
            </PetsContext.Provider>
        </>
    )
}

export default Store;