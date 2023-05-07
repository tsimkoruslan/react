const baseURL = "https://owu.linkpc.net/carsAPI/v1";

const cars = '/cars'

const urls = {
    cars,
    byId: (id: number): string => `${cars}/${id}`
}

export {
    baseURL,
    urls
}