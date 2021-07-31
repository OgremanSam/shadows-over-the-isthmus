import React from 'react'
import { colorList } from './reference/colorList'

const getHex = (string) => {
    //todo something with colorList
    return 'color:#000000';
}

const Message = (props) => {
    //TODO: Add author button to delete message
    let style=getHex(props.color);

    return (
        <div>
            <p><span style={style}>{props.character}</span>{props.description}</p>
        </div>
    )
}

export default Message
