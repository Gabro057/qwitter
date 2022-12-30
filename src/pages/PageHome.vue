<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute" style="width: 100%; height: 100%">
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
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item v-for="qweet in qweets" :key="qweet.id" class="qweet q-py-md">
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
                <span class="q-ml-sm text-grey-7"
                  >@gabro_057 <br class="lt-md" />
                  &bull; {{ relativeDate(qweet.date) }}</span
                >
              </q-item-label>

              <q-item-label class="qweet-content text-body1">
                {{ qweet.content }}
              </q-item-label>

              <div class="qweet-icons row justify-between q-mt-sm">
                <q-btn color="grey" icon="far fa-comment" size="sm" flat round />
                <q-btn color="grey" icon="fas fa-retweet" size="sm" flat round />
                <q-btn
                  :color="qweet.liked ? 'pink' : 'grey'"
                  :icon="qweet.liked ? 'fas fa-heart' : 'far fa-heart'"
                  size="sm"
                  flat
                  round
                  @click="toggleLiked(qweet)"
                />
                <q-btn
                  color="grey"
                  icon="fas fa-trash"
                  size="sm"
                  flat
                  round
                  @click="deleteQweet(qweet.id)"
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { formatDistance } from "date-fns";
import db from "src/boot/firebase";
/*
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore/lite";*/
//setDoc,
import {
  collection,
  query,
  doc,
  onSnapshot,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { onMounted } from "vue";

const newQweetContent = ref("");
const qweets = ref([]);

/*
async function getQweets(db) {
  const qweetsCol = collection(db, "qweets");
  const qweetsSnapshot = await getDocs(qweetsCol);

  qweets.value = [];
  qweetsSnapshot.docs.forEach((item) => {
    let data = item.data();
    data.id = item.id;
    qweets.value.push(data);
  });
  qweets.value.sort((a, b) => b.date - a.date);
}*/
/*
onMounted(() => {
  console.log("mounted");
  getQweets(db);
});*/

onMounted(() => {
  console.log("mounted");

  const q = query(collection(db, "qweets"));
  console.log("q", q);
  const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      console.log("change type", change.type);
      if (change.type === "added") {
        console.log("ADDED");
        let data = change.doc.data();
        data.id = change.doc.id;
        qweets.value.push(data);
      } else if (change.type === "modified") {
        console.log("EDIT");
        const index = qweets.value.findIndex((qweet) => qweet.id === change.doc.id);
        qweets.value.splice(index, 1);
        qweets.value.push({
          id: change.doc.id,
          content: change.doc.data().content,
          liked: change.doc.data().liked,
          date: change.doc.data().date,
        });
      } else if (change.type === "removed") {
        console.log("removed");
        qweets.value = qweets.value.filter((q) => q.id != change.doc.id);
      }
    });

    qweets.value.sort((a, b) => b.date - a.date);
  });
});

const relativeDate = (value) => formatDistance(value, new Date());
const addNewQweet = async () => {
  let newQweet = {
    content: newQweetContent.value,
    date: Date.now(),
    liked: false,
  };
  console.log("newQweet", newQweet);

  const docRef = await addDoc(collection(db, "qweets"), newQweet);
  console.log("docRef", docRef);
  newQweetContent.value = "";
};
const deleteQweet = async (qweetID) => {
  console.log("deleteQweet", qweetID);
  qweets.value = qweets.value.filter((q) => q.id != qweetID);
  await deleteDoc(doc(db, "qweets", qweetID));
  //getQweets(db);
};
const toggleLiked = async (qweet) => {
  qweet.liked = !qweet.liked;
  const actQweet = doc(db, "qweets", qweet.id);

  await updateDoc(actQweet, {
    liked: qweet.liked,
  });
};
</script>

<style lang="sass">
.qweet:not(:first-child)
  border-top: 1px solid rgba(0,0,0,0.12)

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
