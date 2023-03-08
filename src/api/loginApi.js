import { apiRequest } from ".";


export const getUsers = async ()=>{
    const arr = ['login','','GET']
    return await apiRequest(...arr);
}