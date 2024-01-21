<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<v-divider></v-divider>

<template>
  <v-card style="z-index: 9999">
    <v-layout>
      <v-navigation-drawer class="" theme="dark" expand-on-hover rail permanent>
        <v-list>
          <RouterLink to="/account"
            ><v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/lego/1.jpg"
              title="Ivon Pet"
              subtitle="ivon.pet@gmailcom"
            ></v-list-item
          ></RouterLink>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <RouterLink to="/"
            ><v-list-item
              prepend-icon="mdi-view-dashboard"
              title="Dashboard"
            ></v-list-item
          ></RouterLink>

          <RouterLink to="/account"
            ><v-list-item
              prepend-icon="mdi-account"
              title="Account"
            ></v-list-item
          ></RouterLink>

          <RouterLink to="/products"
            ><v-list-item
              prepend-icon="mdi-list-box"
              title="Products"
            ></v-list-item
          ></RouterLink>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block> <v-icon>mdi-logout</v-icon></v-btn>
          </div>
        </template>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<style scoped></style>
