<template>
  <router-view></router-view>
  <nav>
    <v-navigation-drawer app class="bg-error" expand-on-hover rail :permanent="true">
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          title="Administrator"
          subtitle="admin123@gmailcom"
        ></v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list density="default">

        <router-link to="/dashboard" class="custom-color"> 
            <v-list-item prepend-icon="mdi-monitor-dashboard" title="Dashboard" value="dashboard" color="white"></v-list-item>
        </router-link>

        <router-link to="/products" class="custom-color">
        <v-list-item prepend-icon="mdi-cart" title="Manage Products" value="products" color="white"></v-list-item>
        </router-link>
        
        <router-link to="/ticket" class="custom-color">
        <v-list-item prepend-icon="mdi-ticket-account" title="Ticket" value="ticket"></v-list-item>
        </router-link>

        <router-link to="/client" class="custom-color">
        <v-list-item prepend-icon="mdi-account-multiple" title="Client List" value="shared"></v-list-item>
        </router-link>

        <router-link to="/warranty" class="custom-color">
        <v-list-item prepend-icon="mdi-list-status" title="Warranty Status" value="status"></v-list-item>
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
  name: "adminnavbar",
};
</script>
