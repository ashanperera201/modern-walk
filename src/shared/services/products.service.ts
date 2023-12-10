import axiosInstance from "./base.service"

export const productList = async (): Promise<any> => {
    return (await axiosInstance.get('/products')).data;
}