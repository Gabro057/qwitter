<template>
  <q-list bordered>
    <NavItem text="Home" icon="home" />
    <NavItem text="About" icon="help" anchor="about"/>
  </q-list>
</template>

<script setup>
  import NavItem from 'components/NavItem.vue'
</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavList'
})
</script>
