export const getLocations = async()=>{
    const url = 'http://localhost:9999/api/location/';
    const res = await fetch(url);
    const locations = await res.json();
    return locations;
}
  
export const addLocation = async(name, image)=>{
    const url = 'http://localhost:9999/api/location/';
    const body = JSON.stringify({name, image});
    const headers = {'Content-Type':'application/json', Authorization:`Bearer ${localStorage.getItem('token')}`};
    const res = await fetch(url,{ method:'POST', body, headers });
    const result = await res.json();
    return result;
}

export const getMessages = async(locID)=>{
    const url = `http://localhost:9999/api/message/${locID}/`;
    const res = await fetch(url);
    const messages = await res.json();
    return messages;
}
  
export const addMessage = async(locID, description)=>{
    const url = `http://localhost:9999/api/message/${locID}/`;
    const body = JSON.stringify({description});
    const headers = {'Content-Type':'application/json', Authorization:`Bearer ${localStorage.getItem('token')}`};
    const res = await fetch(url,{ method:'POST', body, headers });
    const result = await res.json();
    return result;
}

export const getCharacters = async()=>{
    const url = 'http://localhost:9999/api/character/';
    const res = await fetch(url);
    const characters = await res.json();
    return characters;
}
  
export const addCharacter = async(name, color)=>{
    const url = 'http://localhost:9999/api/character/';
    const body = JSON.stringify({name, color});
    const headers = {'Content-Type':'application/json', Authorization:`Bearer ${localStorage.getItem('token')}`};
    const res = await fetch(url,{ method:'POST', body, headers });
    const result = await res.json();
    return result;
}