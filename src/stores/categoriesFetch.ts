import { defineStore } from "pinia";
import axios from "axios";

interface Category {
  id: number;
  name: string;
  images: string;
  creationAt: string;
  updatedAt: string;
}

interface CategoriesState {
  categories: Category[];
}

export const useCategories: any = defineStore("categories", {
  state: (): CategoriesState => ({
    categories: [],
  }),
  getters: {
    getCategories(state: CategoriesState): Category[] {
      return state.categories;
    },
  },
  actions: {
    async fetchCategories(this: ReturnType<typeof useCategories>) {
      try {
        const { data } = await axios.get(
          "https://api.escuelajs.co/api/v1/categories"
        );
        this.categories = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
