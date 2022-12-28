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
          @click="addNewQweet"
        />
      </div>
    </div>

    <q-separator class="divider" size=".8rem" color="grey-2" />

    <q-list separator>
      <q-item v-for="qweet in qweets" :key="qweet.date" class="q-py-md">
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img
              src="https://gravatar.com/avatar/2ed6381339dc2f0cd3afd0658f0269e3?s=80"
            />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Gabro</strong>
            <span class="q-ml-sm text-grey-7">@gabro_057</span>
          </q-item-label>

          <q-item-label class="qweet-content text-body1">
            {{ qweet.content }}
          </q-item-label>

          <div class="qweet-icons row justify-between q-mt-sm">
            <q-btn color="grey" icon="far fa-comment" size="sm" flat round />
            <q-btn color="grey" icon="fas fa-retweet" size="sm" flat round />
            <q-btn color="grey" icon="far fa-heart" size="sm" flat round />
            <q-btn
              color="grey"
              icon="fas fa-trash"
              size="sm"
              flat
              round
              @click="deleteQweet(qweet)"
            />
          </div>
        </q-item-section>

        <q-item-section side top> {{ relativeDate(qweet.date) }} </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { formatDistance } from "date-fns";

const newQweetContent = ref("");
const qweets = ref([
  {
    content:
      "ABC Eum possimus ad fugiat. Voluptatum odio eligendi excepturi, nesciunt ea animi totam autem dolorum laborum!",
    date: 1672260811975,
  },
  {
    content:
      "DEF Eum possimus ad fugiat. Voluptatum odio eligendi excepturi, nesciunt ea animi totam autem dolorum laborum!",
    date: 1672250812975,
  },
]);
const relativeDate = (value) => formatDistance(value, new Date());
const addNewQweet = () => {
  let newQweet = {
    content: newQweetContent.value,
    date: Date.now(),
  };
  console.log("newQweet", newQweet);
  qweets.value.unshift(newQweet);
  newQweetContent.value = "";
};
const deleteQweet = (qweet) =>
  (qweets.value = qweets.value.filter((q) => q.date != qweet.date));
</script>

<style lang="sass">
.new-qweet textarea
  font-size: 120%
  line-height: 1.4 !important

.qweet-content
  white-space: pre-line

.qweet-icons
  margin-left: -5px

.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
</style>
