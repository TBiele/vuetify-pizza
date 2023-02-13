// Utilities
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  const style = ref('');
  const dough = ref('');
  const toppings = ref([]);

  function resetOrder() {
    style.value = '';
    dough.value = '';
    toppings.value = [];
  }

  return { style, dough, toppings, resetOrder };
});
