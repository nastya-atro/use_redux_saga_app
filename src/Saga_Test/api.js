import axios from "axios"


export const instanse = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "e33a9b28-32d1-4022-81b8-0bd4ba992caa" },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})


 
export const usersApi = {
    getUsers() {
        return instanse.get(`users`)
    },
    getStatus(){
        return instanse.get(`profile/status/16364`)
        .then(res=>res.data)
    },
    changeStatus(status){
        return instanse.put(`profile/status`, {status})
        .then(res=>res.data)
    }
    
}
