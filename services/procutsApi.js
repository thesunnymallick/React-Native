import { apiservice } from "../config/apiService";


export const getAllProducts=()=>apiservice.get(`/products`);

export const getProductById=(id)=>apiservice.get(`/products/${id}`);