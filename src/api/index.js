export const baseURL = 'http://localhost:3500';

export const apiRequest = async (...rest)=>{
    const [url,id,method,body,config] = rest;
    let res;
    try{
        if(method.toLowerCase() === 'get'){
            res = await fetch(`${baseURL}/${url}/${id}`,{
                method,
                headers:{
                    "Content-Type":"Application/json"
                }
            })
        }
        else{
            res = await fetch(`${baseURL}/${url}/${id}`,{
                method,
                headers:{
                    "Content-Type":"Application/json",
                    ...config
                },
                body
            })
        }
        let data = await res.json();
        return data;
    }
    catch(error){
        return error;
    }
}