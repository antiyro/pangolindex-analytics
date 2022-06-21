import React, { useContext } from 'react';
import ChainContext from './chain-context';

const ChainMenu = () => {
    const chains = useContext(ChainContext);
    return (
        <div> {JSON.stringify(chains)}</div>
    )
}

export default ChainMenu