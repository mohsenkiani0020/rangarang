import { ProductForm } from "@/models/productModel";
import axios from "axios";
class Product {
  private axiosInstance = axios.create({
    baseURL: "https://cloud.rangarang-group.com",
    headers: {
      "accept": "text/plain",
    },
  });

  async getProducts(productGroupId: string, workTypeId: string): Promise<ProductForm> {
    try {
      let url = `/api/Order/GetForm?productGroupId=${productGroupId}&workTypeId=${workTypeId}`;
      const response = await this.axiosInstance.get<ProductForm>(url);
      return response.data;
  
    } catch (error) {
      throw new Error("Failed to get products");
    }
  }

}

export default new Product()
