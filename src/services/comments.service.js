import axiosService from "./axios.service";
import {urls} from "../constans/urls";

const commentsService = {
    getAll: () => axiosService.get(urls.comments),
}
export default commentsService