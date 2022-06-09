export interface HoaDonType {
	id: any;
    idSP: ListSanPham[];
    idUser: string;
}
export interface ListSanPham {
	id: any;
    name: string;
    image: string;
    price: number;
    init: string;
    count: number;
}