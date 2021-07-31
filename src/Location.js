import React from 'react'
import { getSource } from './reference/imageList';

const Location = (props) => {
    let id = props._id;
    let imgSource = getSource(props.image);
    let imgAlt = props.image;
    let name = props.name;
    let href = `/location/${id}`;

    return (
        <div className="locationCard" key={id}>
            <img src={imgSource} alt={imgAlt} style={{width:"100%"}} />
            <div>
                <p className="locTitle">{name}</p> <br />
                <a href={href}>Go To Location</a>
            </div>
        </div>
    )
}

export default Location
