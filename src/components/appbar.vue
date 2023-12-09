<template>
     <v-app-bar app class="bg-cyan-darken-4">
    <v-app-bar-title>SecureGuard | Celestech Enterprise</v-app-bar-title>
    <v-btn
        class="ma-2"
        color="white"
        icon="mdi-bell"
      ></v-btn>
    <template v-slot:prepend>
      <v-icon icon="mdi mdi-cctv" class="flip-horizontal pr-5 pl-1"></v-icon>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "appbar",
};
</script>

<style scoped>
/* Flip horizontally */
.flip-horizontal {
  transform: scaleX(-1);
}

/* Flip vertically */
.flip-vertical {
  transform: scaleY(-1);
}
</style>