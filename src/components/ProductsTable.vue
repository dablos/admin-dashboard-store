<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useProducts } from "../stores/dataFetch";
import { RouterLink } from "vue-router";

const productsStore = useProducts();
const products = ref([]);
const isDataLoaded = ref(false);
const search = ref("");

const fetchData = async () => {
  await productsStore.fetchProducts();
};

onMounted(async () => {
  await fetchData();

  products.value = await productsStore.products.map((e: any) => {
    return {
      title: e.title as String,
      price: e.price as String,
      description: e.description as String,
      image: e.images[0] as String,
    };
  });

  products.value.length > 0
    ? (isDataLoaded.value = true)
    : (isDataLoaded.value = false);
});
</script>

<template>
  <v-card flat style="z-index: 1">
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          density="compact"
          prepend-inner-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          variant="solo-filled"
        ></v-text-field>
      </v-card-title>

      <RouterLink to="/product"
        ><v-btn class="mx-2 m-0" fab dark color="green">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn></RouterLink
      >

      <v-data-table
        item-key="title"
        :headers="title"
        v-model:search="search"
        :items="products"
        loading-text="Loading... Please wait"
      >
        <template v-slot:item.image="{ item }">
          <v-card class="my-2" elevation="2" rounded>
            <v-img :src="`${item.image}`" height="64" cover></v-img>
          </v-card>
        </template>
      </v-data-table>
    </v-card>
  </v-card>
</template>
