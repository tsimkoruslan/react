import {axiosService} from "./axios.service";

import {IRes} from "../types/axiosRes.type";
import {IUser} from "../interfaces/user.interface";
import {urls} from "../constans/urls";

const userService = {
    getAll: (): IRes<IUser[]> => axiosService.get(urls.users),
    getUserById: (id: string | undefined):IRes<IUser> => axiosService.get(`${urls.users} ${id}`)
}

export default userService