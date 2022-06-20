export interface ReceiptType {
	id: any;
    idSP: ListProduct[];
    idUser: string;
}
export interface ListProduct {
	id: any;
    name: string;
    image: string;
    price: number;
    init: string;
    count: number;
}