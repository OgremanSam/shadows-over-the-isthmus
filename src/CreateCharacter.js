import React, { useState } from 'react'
import { colorList } from "./reference/colorList";
import { getCharacters, addCharacter } from "./controllers/dataController";
import "./CreateCharacter.css";

let nameIsTaken = (name) => {
    return getCharacters().then(characters => {
        let found = false;
        for (let character of characters){
            if(character.name === name){
                found = true;
                break;
            }
        }
        return found;
    })
}

const CreateCharacter = (props) => {
    let [name, setName] = useState('');
    let [color, setColor] = useState('');
    let [sampleStyle, setSampleStyle] = useState({background:"PowderBlue", color:'#000000'});
    let [error, setError] = useState(null);

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const colorChangeHandler = (e) => {
        setColor(e.target.value);
        console.log(e.target.value);
        setSampleStyle({background:"PowderBlue", color:'#'+e.target.hex});
    }

    let mappedList = colorList.map(color => (<option value={color.str} hex={color.hex} key={color.key}>{color.str}</option>))

    const submitHandler = async (e) => {
        e.preventDefault();
        let taken = await nameIsTaken(name);

        if(name.trim().length < 3 || name.trim().length > 30){
            setError('Must be at least 3 and no more than 30 characters');
            return;
        } else if(taken){
            setError('Name is already taken');
        } else {
            addCharacter(name.trim(), color);
            props.history.push('/profile');
        }
    }

    return (
        <div className="user-form">
            <h1>Create a New Character</h1>
            <form onSubmit={submitHandler}>
                <div className="form-name-field">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={nameChangeHandler} value={name}/>
                    {error !== null && (<div className="error">{error}</div>)}
                </div>
                <div className="form-color-select">
                    <label htmlFor="color">Color: </label>
                    <select name="color" id="color" onChange={colorChangeHandler}>
                        {mappedList}
                    </select>
                    <p className="sample" style={sampleStyle}>Color Sample</p>
                </div>
                <button className="form-btn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateCharacter
