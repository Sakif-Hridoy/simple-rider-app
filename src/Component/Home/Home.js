import React, { useEffect, useState } from 'react';
import './Home.css';
import FakeData from '../FakeData/vehicle.json';

const Home = () => {
    const [vehicles,setVehicle] = useState([]);

    useEffect(()=>{
        const loadData = FakeData;
    })
    return (
        <div className="home">
            <h1>This is Home</h1>
        </div>
    );
};

export default Home;