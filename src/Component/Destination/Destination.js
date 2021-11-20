import React from 'react';
import { useParams } from 'react-router';
import Search from './../Search/Search';

const Destination = () => {
    const {vehicleType} = useParams();
    return (
        <div>
            <Search vehicleType={vehicleType}></Search>
        </div>
    );
};

export default Destination;