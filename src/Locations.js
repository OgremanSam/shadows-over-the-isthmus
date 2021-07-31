import { useEffect, useState } from 'react'
import { getLocations } from './controllers/dataController';
import Location from "./Location";
import AddLocation from "./AddLocation.js";
import "./Locations.css";

const Locations = () => {
    let [locations, setLocations] = useState([]);
    let [toggleAdd, setToggleAdd] = useState(false);

    let locationLoader = () => {
        getLocations().then((data) => {
            setLocations(data.map(Location));
        })
    };

    useEffect(locationLoader, []);

    const toggler = () => {
        if(toggleAdd) { setToggleAdd(false); }
        else { setToggleAdd(true); }
    }

    return (
        <>
            <h1>Location Listing</h1>
            <p className="toggler-line">Don't see one you'd like to use? <button onClick={toggler}>{!toggleAdd ? "Add it here" : "Hide"}</button></p>
            {toggleAdd&&(<AddLocation loader={locationLoader}/>)}
            <div className="location-div">
                {locations}
            </div>
        </>
    )
}

export default Locations;