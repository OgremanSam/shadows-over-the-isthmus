import React, { useState } from 'react'
import { addLocation } from "./controllers/dataController";

const AddLocation = (props) => {
    let [name, setName] = useState('');
    let [image, setImage] = useState('streetlight');

    let images = [
        "streetlight",
        "cave",
        "nightclub",
        "fireplace"
    ].map(img=>(<option key={img} value={img}>{img}</option>))

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }
    const imageChangeHandler = function(e){
        setImage(e.target.value);
        console.log(e.target.value);
        console.log(image);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(name.length > 0){
            addLocation(name, image);
            props.loader();
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" onChange={nameChangeHandler} value={name}/>
            <label htmlFor="image">Image:</label>
            <select name="image" id="image" onChange={imageChangeHandler} value={image}>
                {images}
            </select>
            <button className="add-btn" type="submit">Add it!</button>
        </form>
    )
}

export default AddLocation
