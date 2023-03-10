import axios from "axios";

const baseURL="https://social-network.samuraijs.com/api/1.0/"
const instance=axios.create({
    withCredentials:true,
    headers: {'API-KEY': "a651bbe7-8de7-4bc8-9f75-a201654731a1"},
    baseURL
})

export const usersApi={
    getUsers (countUserOnPage:number, currentPage:number=1) {
        return  instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}count=${countUserOnPage}`,
            {withCredentials:true,
                headers: {'API-KEY': "a651bbe7-8de7-4bc8-9f75-a201654731a1"}}).then(response=> response.data)
    }
}