import {axiosServices} from "./axios.services";
import {urls} from "./urls";


const userServices = {
    getTodos: () => axiosServices.get(urls.todos),
    getAlbums: () => axiosServices.get(urls.albums),
    getComments: () => axiosServices.get(urls.comments),
    getPostById: (id) => axiosServices.get(`${urls.posts}/${id}`)
}
export default userServices