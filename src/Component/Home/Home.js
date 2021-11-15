import React, { useEffect, useState } from 'react';
import './Home.css';
import FakeData from '../FakeData/vehicle.json';
import Vehicle from '../Vehicle/Vehicle';


const Home = () => {
    const [vehicles,setVehicle] = useState([]);

    useEffect(()=>{
        const loadData = FakeData;
        setVehicle(loadData)
    },[])
    return (
        <React.Fragment>
            <div className="container top">
                {
                    vehicles.map(vehicle =><Vehicle key={vehicle.uuid} vehicle={vehicle}></Vehicle>)
                }
            </div>
        </React.Fragment>
    );
};

export default Home;