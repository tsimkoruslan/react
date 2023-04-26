import {Location, useLocation} from "react-router-dom";

interface iState<T> extends Location {
    state: T
}

const useAppLocation =<K> ():iState<K> => useLocation()

export {
    useAppLocation
}