import {axiosService} from "./axios.servis";
import {urls} from "../config/urls";
import {post} from "axios";


const usersService = {
    getAll: () => axiosService.get(urls.users),
    postUser: (user) => axiosService.post(urls.users, user),
    postComments: (comment) => axiosService.post(urls.comments, comment)
}


export {
    usersService
}