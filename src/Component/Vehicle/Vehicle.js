import React from 'react';
import { Link } from 'react-router-dom';
import './Vehicle.css';
const Vehicle = (props) => {
const { vehicle_type, image } = props.vehicle;

    return (
        <React.Fragment>
            <div className=" row-cols-1  row-cols-lg-4 row-cols-md-3 mx-2 mt-4">
                <div className="height floating p-2">
                    <div className="card h-100 shadowBox p-2 mb-2 rounded ">
                        <Link to={"/destination/" + vehicle_type} >
                            <button className="col-12 col-lg-12 col-md-8 col-sm-12 btn c-btn-color mx-auto">
                                <img src={image} className=" card-img-top profile rounded  mx-auto" alt="..." />
                                <p className="card-text fw-bolder mt-4">{vehicle_type}</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
};

export default Vehicle;