<template>
  <q-item clickable :to="anchor" v-ripple exact>
    <q-item-section avatar>
      <q-icon :name="icon" size="md" />
    </q-item-section>
    <q-item-section class="text-h6 text-weight-bold">
      {{ text }}
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavItem",
  props: {
    text: {
      type: String,
      required: true,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    anchor: {
      type: String,
      default: "/",
    },
  },
});
</script>
