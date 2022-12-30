<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-grey-9">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            class="q-pa-md lt-md header-icon"
            color="primary"
            name="fas fa-dove"
            size="sm"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered side="left" :width="283">
      <NavList />
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" show-if-above bordered side="right">
      <q-input placeholder="Search Qwitter" outlined rounded dense class="q-ma-md">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-list padding separator>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey"> Vzdělávání </q-item-label>
            <q-item-label class="text-weight-bold">
              Lorem ipsum dolor sit amet.
            </q-item-label>
            <q-item-label caption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eos architecto
              impedit nulla quam cupiditate, ad eveniet quo aspernatur aliquam.
            </q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>5 min. ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey"> Vzdělávání </q-item-label>
            <q-item-label class="text-weight-bold">
              Lorem ipsum dolor sit amet.
            </q-item-label>
            <q-item-label caption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eos architecto
              impedit nulla quam cupiditate, ad eveniet quo aspernatur aliquam.
            </q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>5 min. ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey"> Vzdělávání </q-item-label>
            <q-item-label class="text-weight-bold">
              Lorem ipsum dolor sit amet.
            </q-item-label>
            <q-item-label caption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eos architecto
              impedit nulla quam cupiditate, ad eveniet quo aspernatur aliquam.
            </q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>5 min. ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey"> Vzdělávání </q-item-label>
            <q-item-label class="text-weight-bold">
              Lorem ipsum dolor sit amet.
            </q-item-label>
            <q-item-label caption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eos architecto
              impedit nulla quam cupiditate, ad eveniet quo aspernatur aliquam.
            </q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>5 min. ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import NavList from "components/MainLayoutNav.vue";

const leftDrawerOpen = ref(true);
const rightDrawerOpen = ref(true);

const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
</script>

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>
