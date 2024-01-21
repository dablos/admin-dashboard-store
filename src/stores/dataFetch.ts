import { defineStore } from "pinia";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  images: [];
}

interface ProductsState {
  products: Product[];
}

export const useProducts: any = defineStore("products", {
  state: (): ProductsState => ({
    products: [],
  }),
  getters: {
    getProducts(state: ProductsState): Product[] {
      return state.products;
    },
  },
  actions: {
    async fetchProducts(this: ReturnType<typeof useProducts>) {
      try {
        const { data } = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        this.products = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
