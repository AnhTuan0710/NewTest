import endpoint from "./Endpoint";
import client from "./apiClient";
export const apiAddPro = (data: any, tokken : any) => {
    return client.post(endpoint.API_ADDPRODUCT, data)
}
export const apiKind = () => {
    return client.get(endpoint.API_KIND)
}
export const apiGroup = (token: any) => {
    return client.get(endpoint.API_GROUND)
}
