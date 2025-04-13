import { apiservice } from "../config/apiService";


export const getAllProducts=()=>apiservice.get(`/products`);