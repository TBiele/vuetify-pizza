<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <div v-if="step === 0">
        <!-- Select style -->
        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <h3>What style of pizza would you like?</h3>
          </v-col>
        </v-row>
        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <v-radio-group v-model="style">
              <v-radio label="Italian" value="Italian" />
              <v-radio label="American" value="American" />
            </v-radio-group>
          </v-col>
        </v-row>
      </div>
      <div v-if="step === 1">
        <!-- Select dough -->
        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <h3>Which dough do you want?</h3>
          </v-col>
        </v-row>
        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <v-radio-group v-model="dough">
              <v-radio label="Standard" value="standard" />
              <v-radio label="Wholegrain" value="wholegrain" />
              <v-radio label="Sour dough" value="sour" />
            </v-radio-group>
          </v-col>
        </v-row>
      </div>
      <div v-if="step === 2">
        <!-- Select toppings -->
        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <h3>Select your toppings</h3>
          </v-col>
        </v-row>
        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <v-checkbox
              v-model="toppings"
              label="Tomatoes"
              value="tomatoes"
              density="compact"
            />
            <v-checkbox
              v-model="toppings"
              label="Mushrooms"
              value="mushrooms"
              density="compact"
            />
            <v-checkbox
              v-model="toppings"
              label="Bell pepper"
              value="bell pepper"
              density="compact"
            />
            <v-checkbox
              v-model="toppings"
              label="Onions"
              value="onions"
              density="compact"
            />
            <v-checkbox
              v-model="toppings"
              label="Garlic"
              value="garlic"
              density="compact"
            />
            <v-checkbox
              v-model="toppings"
              label="Black olives"
              value="olives"
              density="compact"
            />
            <v-checkbox
              v-model="toppings"
              label="Pineapple"
              value="pineapple"
              density="compact"
            />
            <v-checkbox
              v-model="toppings"
              label="Spinach"
              value="spinach"
              density="compact"
            />
            <v-checkbox
              v-model="toppings"
              label="Salami"
              value="salami"
              density="compact"
            />
            <v-checkbox
              v-model="toppings"
              label="Sausage"
              value="sausage"
              density="compact"
            />
            <v-checkbox
              v-model="toppings"
              label="Extra cheese"
              value="extra cheese"
              density="compact"
            />
            <v-checkbox
              v-model="toppings"
              label="Vegan cheese"
              value="vegan cheese"
              density="compact"
            />
          </v-col>
        </v-row>
      </div>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto" style="max-width: 80%">
          <span v-if="style">
            You have selected an
            <span class="font-weight-bold">{{ style }}</span
            >-style pizza
          </span>
          <span v-if="dough">
            with <span class="font-weight-bold">{{ dough }} dough</span>
          </span>
          <span v-if="toppings.length > 0">
            and the toppings
            <span class="font-weight-bold">{{ toppings.join(', ') }}</span
            >.
          </span>
          <span v-if="toppings.length == 0 && step > 1">
            and <span class="font-weight-bold">no toppings</span>.
          </span>
        </v-col>
      </v-row>
      <div v-if="step == 3">
        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <v-checkbox
              v-model="confirm"
              label="The order is correct"
              value="tomatoes"
              density="compact"
            />
          </v-col>
        </v-row>
      </div>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            :disabled="step === 0"
            color="primary"
            min-width="228"
            size="x-large"
            variant="flat"
            @click="step--"
          >
            Back
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            v-if="step < 3"
            :disabled="(step === 0 && !style) || (step === 1 && !dough)"
            color="primary"
            min-width="228"
            size="x-large"
            variant="flat"
            @click="step++"
          >
            Next
          </v-btn>
          <v-btn
            v-else
            :disabled="!confirm"
            color="primary"
            min-width="228"
            size="x-large"
            variant="flat"
            @click="submitOrder"
          >
            Place Order
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';
import { useRouter } from 'vue-router';

// store
const appStore = useAppStore();
const { style, dough, toppings } = storeToRefs(appStore);
const { resetOrder } = appStore;
const router = useRouter();

// local state
const step = ref(0);
const confirm = ref(false);

function submitOrder() {
  console.log('submitting order');
  console.log({
    style: style.value,
    dough: dough.value,
    toppings: toppings.value,
  });
  resetOrder();
  router.push('/success');
}
</script>

<style>
.v-input__details {
  min-height: 0px !important;
}
.v-messages {
  min-height: 0px !important;
}
</style>
