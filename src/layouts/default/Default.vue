<template>
  <v-app>
    <default-view />
    <v-footer app color="white" class="text-center" fixed inset>
      <v-row justify="center" no-gutters>
        <v-col class="text-center mt-4">
          <v-btn color="grey" variant="text" @click="$router.push('/about')">
            About
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup>
import DefaultView from './View.vue';
</script>
