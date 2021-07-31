export const register = async(email, password)=>{
    const url = 'http://localhost:9999/api/user/register';
    const body = JSON.stringify({email, password});
    const headers = {'Content-Type':'application/json'};
    const res = await fetch(url,{ method:'POST', body, headers });
    const result = await res.json();
    return result;
}

export const login = async(email, password)=>{
    const url = 'http://localhost:9999/api/user/login';
    const body = JSON.stringify({email, password});
    const headers = {'Content-Type':'application/json'};
    const res = await fetch(url,{ method:'POST', body, headers });
    let result;
    if(res.ok){
        result = await res.json();
    } else {
        throw res;
    }
    return result;
}