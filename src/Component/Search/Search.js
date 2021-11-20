import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../FakeData/vehicle.json';
import people from "../../images/peopleicon.png";
import "./Search.css";

const Search = (props) => {
    const [vehicleFound,setVehicleFound] = useState({});
    const {vehicleType} = useParams();

    useEffect(()=>{
        const readVehicle = fakeData.find(item=> item?.vehicle_type=== vehicleType);
        setVehicleFound(readVehicle);
    },[vehicleType,vehicleFound]);

    const findVehicle = () => {
        const depart = document.getElementById("from").value;
        document.getElementById("From").innerText = depart;
        const arrive = document.getElementById("to").value;
        document.getElementById("To").innerText = arrive;
        document.getElementById("hide").style.display = "none";
        document.getElementById("btn-hide").style.display = "none";
        document.getElementById("show").style.display = "show";
        document.getElementById("details").style.display = "block";
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                        <div className="bg-secondary p-2 border-5 rounded">
                            <div id="hide">
                                <input type="text" name="from" id="from" className="form-control mb-2" placeholder="From" required />
                                <input type="text" name="to" id="to" className="form-control mb-2" placeholder="To" required />
                                <label for="bookingDate" className="fs-5 fw-2">Booking Data : </label>
                                <input type="date" id="bookingDate" name="bookingDate" required />
                            </div>
                            <div id="show" style={{ display: 'hide' }}>
                                <p className="text-start text-warning fs-4">From : <span id="From"></span></p>
                                <p className="text-start text-warning fs-4">To : <span id="To"></span></p>
                                <div id="details" style={{ display: 'none' }}>
                                    <div className="text-start bg-white border rounded-1 mb-2">
                                        <ul className="  d-flex align-items-center">
                                            <li className="col-lg-4"><img src={vehicleFound?.image} className="p-3" width="100px" alt="" /></li>
                                            <li className=" fw-bold">{vehicleFound?.vehicle_type}</li>
                                            <li className="fw-bold"><img src={people} className="p-3 w-50" alt="" />2</li>
                                            <li className=" fw-bolder mx-auto">${vehicleFound?.regular}</li>
                                        </ul>
                                    </div>
                                    <div className="text-start bg-white border rounded-1 mb-2">
                                        <ul className=" d-flex align-items-center">
                                            <li className="col-lg-4 "><img src={vehicleFound?.image} className="p-3" width="100px" alt="" /></li>
                                            <li className=" fw-bold">{vehicleFound?.vehicle_type}</li>
                                            <li className="fw-bold"><img src={people} className="p-3 w-50" alt="" />4</li>
                                            <li className=" fw-bolder mx-auto">${vehicleFound?.premium}</li>
                                        </ul>
                                    </div>
                                    <div className="text-start bg-white border rounded-1 mb-2">
                                        <ul className="d-flex align-items-center">
                                            <li className="col-lg-4 "><img src={vehicleFound?.image} className="p-3" width="100px" alt="" /></li>
                                            <li className=" fw-bold">{vehicleFound?.vehicle_type}</li>
                                            <li className=" fw-bold"><img src={people} className="p-3 w-50" alt="" />6</li>
                                            <li className=" fw-bolder mx-auto">${vehicleFound?.vip}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <button id="btn-hide" className="btn bg-warning" onClick={() => findVehicle()}>Search</button>
                        </div>
                    </div>
                    <div className="col-lg-8 m-0 col-md-6 col-sm-12 mt-4">
                        {/* <img className="  w-75" src={map} alt="" /> */}
                        <iframe className="border-4 rounded" width="520" title="maps" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Kansas%20City+()&amp;t=p&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
                        <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=4b739f6d5bb74ed457ec8d60f71484cb48ae7ee7'></script>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Search;