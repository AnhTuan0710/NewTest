import endpoid from "./Enpoind";
import _http from "./apiClient";
export const apiLoggin = (data: { login_id: string; password: string; }) => {
    return _http.post(endpoid.API_LOGIN,data)
}
