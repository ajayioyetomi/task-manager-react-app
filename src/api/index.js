import Axios from "axios";
export const baseURL = 'http://localhost:3500';
export const api = Axios.create({
    baseURL:"http://localhost:3500"
})

export const apiRequest = async (...rest)=>{
    const [url,id,method,body,config] = rest;
    let res;
    try{
        if(method.toLowerCase() === 'get')
            res = await api.get(`/${url}/${id}`);
        
        else
          res = await api.post(`/${url}/${id}`,body);
          
        let data = res;
        return data;
    }
    catch(error){
        return error;
    }
}