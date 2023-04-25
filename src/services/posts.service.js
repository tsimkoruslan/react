import axiosService from "./axios.service";
import {urls} from "../constans/urls";


const postsService = {
    getAll:() => axiosService.get(urls.posts)
}

export default postsService