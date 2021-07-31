import React from 'react'

const Main = (props) => {
    if (props.logout){
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        props.changeUser({});
    }

    return (
        <div>
            <h1>Welcome to the Shadows!</h1>
            <p>This is a player-made page for location-based, in-character messages for the VtM LARP Shadows Over the Isthmus, a troupe game based in Madison, Wisconsin. It is currently in beta and some features may still be under construction. Feel free to sign up and start chatting!</p>
            <img alt="vampire about to bite sleeping person, black and white" src="https://live.staticflickr.com/2454/3922407441_bbfb32c756_n.jpg" />
            <p className="attrib"><a href="https://www.flickr.com/photos/28269958@N07/3922407441">"Vampire"</a> by <a href="https://www.flickr.com/photos/28269958@N07">virginsuicide photography</a> is licensed under <a href="https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=rich">CC BY-SA 2.0</a> </p>
        </div>
    )
}

export default Main
