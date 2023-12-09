<template>
    <router-view></router-view>
    <nav>
      <v-navigation-drawer app class="bg-info" expand-on-hover rail :permanent="true">
        <v-list>
          <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Client" subtitle="admin123@gmailcom"></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list density="default">
  
          <router-link to="/dashboard" class="custom-color"> 
              <v-list-item prepend-icon="mdi-cart" title="Browse Products" value="dashboard" color="white"></v-list-item>
          </router-link>
  
          <router-link to="/products" class="custom-color">
          <v-list-item prepend-icon="mdi-cart-arrow-down" title="My Orders" value="products" color="white"></v-list-item>
          </router-link>
          
          <router-link to="/ticket" class="custom-color">
          <v-list-item prepend-icon="mdi-cart-check" title="Purchased Items" value="ticket"></v-list-item>
          </router-link>
  
          <router-link to="/client" class="custom-color">
          <v-list-item prepend-icon="mdi-alert-circle-outline" title="Report Issue" value="shared"></v-list-item>
          </router-link>
  
        </v-list>
  <template v-slot:append>
      <router-link to="/settings" class="custom-color">
        <v-list class="pa-0">
          <v-list-item prepend-icon="mdi-cogs" title="Account Settings" value="settings"></v-list-item>
        </v-list>
      </router-link>
  </template>
      </v-navigation-drawer>
    </nav>
  </template>
  <style scoped>
  .custom-color {
    text-decoration: none;
    color: white;
  }
  </style>
  
  <script>
  export default {
    name: "clientnavbar",
  };
  </script>
  