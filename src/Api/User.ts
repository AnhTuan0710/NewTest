import endpoint from "./Endpoint";
import client from "./apiClient";
export const apiLoggin = (data: { login_id: string; password: string; }) => {
    return client.post(endpoint.API_LOGIN,data)
}
