<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          class="new-qweet"
          bottom-slots
          v-model="newQweetContent"
          placeholder="What's happening?"
          counter
          maxlength="280"
          autogrow
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img
                src="https://gravatar.com/avatar/2ed6381339dc2f0cd3afd0658f0269e3?s=80"
              />
            </q-avatar>
          </template>
          <template v-slot:append>
            <q-icon
              v-if="newQweetContent !== ''"
              name="close"
              @click="newQweetContent = ''"
              class="cursor-pointer"
            />
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          color="primary"
          class="q-mb-lg"
          label="Qweet"
          no-caps
          rounded
          unelevated
          :disable="!newQweetContent"
        />
      </div>
    </div>

    <q-separator class="divider" size=".8rem" color="grey-2" />
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const newQweetContent = ref("");
</script>

<style lang="sass">
.new-qweet textarea
  font-size: 120%
  line-height: 1.4 !important

.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
</style>
