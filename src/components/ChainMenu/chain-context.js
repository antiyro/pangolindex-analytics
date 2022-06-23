import React from 'react'

export const chains = {
    avalanche: {
        id: '1'
    },
    near: {
        id: '2'
    }
};

const ChainContext = React.createContext(chains.avalanche)

export default ChainContext
