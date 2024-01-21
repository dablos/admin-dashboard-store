<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useCategories } from "../stores/categoriesFetch";
import { RouterLink, useRouter } from "vue-router";
import { useProductCategory } from "../stores/productCategory";

const valid = ref(true);
const image = ref("");
const commonRules = [
  (v: any) => !!v || "This is required",
  (v: any) => (v && v.length >= 3) || "This must be more than 3 characters",
];
const select = ref("");
const checkbox = ref(false);

const formRef = ref();

const router = useRouter();

// add new poroduct
const productCategoryStore = useProductCategory();

const validate = async () => {
  formRef.value.validate();

  if (!select.value || !image.value) {
    console.error("Name and image are required.");
    return;
  }

  console.log(select.value);
  console.log(image.value);

  try {
    await productCategoryStore.addProductCategory({
      name: select.value,
      image: image.value,
    });

    if (valid.value) {
      router.push("/products");
    }
  } catch (error) {
    console.log("Error appeared in submitting the form: ", error);
  }
};

const reset = () => {
  formRef.value.reset();
};

// data for categories
const categoriesStore = useCategories();
const categories = ref([]);

const fetchData = async () => {
  await categoriesStore.fetchCategories();
};

onMounted(async () => {
  await fetchData();
  categories.value = categoriesStore.categories.sort(
    (a: any, b: any) => b.name - a.name
  );
});
</script>

<template>
  <h1>Add new product</h1>
  <v-form ref="formRef" v-model="valid" lazy-validation>
    <v-text-field
      v-model="image"
      :counter="10"
      :rules="commonRules"
      label="Image URL"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="categories"
      item-value="name"
      item-title="name"
      :rules="[(v) => !!v || 'Category is required']"
      label="Categories"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[(v) => !!v || 'You must agree to continue!']"
      label="Did you complete the form?"
      required
    ></v-checkbox>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Submit <RouterLink to="/products"></RouterLink>
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
  </v-form>
</template>

<style scoped></style>
