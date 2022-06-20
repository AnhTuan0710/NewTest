import endpoint from "./Endpoint";
import client from "./apiClient";
export const apiAddPro = (data: any, tokken : any) => {
    return client.post(endpoint.API_ADDPRODUCT, data, {
        headers: {
            authorization: tokken   
        }
    })
}

