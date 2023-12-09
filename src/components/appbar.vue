<template>
     <v-app-bar app color="error">
    <v-app-bar-title>Celestech Enterprise</v-app-bar-title>
    <v-btn
        class="ma-2"
        color="white"
        icon="mdi-bell"
      ></v-btn>
    <template v-slot:prepend>
      <v-icon icon="mdi mdi-webcam"></v-icon>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "appbar",
};
</script>