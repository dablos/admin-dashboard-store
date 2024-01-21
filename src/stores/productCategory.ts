import { defineStore } from "pinia";
import axios from "axios";

interface ProductCategory {
  name: string;
  image: string;
}

interface ProductCategoryState {
  productCategory: ProductCategory[];
}

export const useProductCategory: any = defineStore("productCategory", {
  state: (): ProductCategoryState => ({
    productCategory: [] as ProductCategory[],
  }),
  actions: {
    async addProductCategory(
      this: ReturnType<typeof useProductCategory>,
      newCategory: ProductCategory
    ) {
      try {
        const { data } = await axios.post(
          "https://api.escuelajs.co/api/v1/categories/",
          newCategory
        );
        this.productCategory = data;
      } catch (error) {
        console.error("Error adding a product: ", error);
      }
    },
  },
});
