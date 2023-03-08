import { apiRequest } from ".";



export const getUsers = async (arr)=>{
    //const arr = ['login','','GET']
    return await apiRequest(...arr);
}