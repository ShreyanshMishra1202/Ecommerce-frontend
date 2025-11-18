import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export function getProductDetail(id){
    return axios.get(`${API_BASE_URL}/products/${id}`); 
}

export function getProductList(){
    return axios.get(`${API_BASE_URL}/products`);
}