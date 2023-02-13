<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img contain height="300" src="@/assets/pizza-logo.svg" />
      <div class="py-2" />
      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>
      <h1 class="text-h2 font-weight-bold">Pinia's Pizza</h1>
      <div class="text-body-2 font-weight-light mb-n1">
        Click the button to place your order
      </div>
      <div class="py-4" />
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            color="primary"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
            @click="$router.push('/selection')"
          >
            Select Your Pizza
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
// 
</script>
