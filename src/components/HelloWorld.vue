<template>
  <div>
    <div class="" v-if="!myData">
      <div class="heading">WER BIST DU?</div>
      <div
        class="user-card p-3"
        v-for="e in items"
        v-bind:key="e"
        @click="registerAndChoose(e)"
      >
        <img
          class="profil-pic rounded-circle"
          :src="`./assets/${e.name}.jpeg`"
          alt=""
        />
        <div class="mitte">{{ e.name }}</div>
      </div>
    </div>
    <div class="" v-if="myData">
      <div class="heading">DU BIST DER WICHTEL FÜR:</div>
      <div class="user-card p-3">
        <img
          class="profil-pic rounded-circle"
          :src="`./assets/${myData}.jpeg`"
          alt=""
        />
        <div class="mitte">{{ myData }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import {
  deleteDoc,
  DocumentData,
  getFirestore,
  QueryDocumentSnapshot,
  doc,
  DocumentReference,
  UpdateData,
  setDoc,
  getDoc,
  limitToLast,
  where,
  arrayUnion,
  arrayRemove,
  onSnapshot,
  documentId,
} from "firebase/firestore";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import db from "../main";

export default defineComponent({
  setup() {
    const items = ref<{ id: string }[]>([]);
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "familie"));
        items.value = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };
    fetchData();
    let myData = localStorage.getItem("myData");
    if (myData != null) {
      myData = myData.replace(/"/g, "");
    }
    return {
      items,
      myData,
    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      helper: "",
    };
  },
  methods: {
    clearAll() {
      localStorage.clear();
    },
    registerAndChoose(a: any) {
      localStorage.setItem("myData", JSON.stringify(a.partner));
      location.reload();
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.user-card {
  position: relative;
  text-align: center;
  color: white;
}
.profil-pic {
  max-height: 350px;
}
.mitte {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  font-weight: bolder;
  //-webkit-text-stroke-width: 2px;
  //-webkit-text-stroke-color: black;
  text-shadow: 0px 0px 20px #000000;
}
.heading {
  color: green;
  font-size: 50px;
  font-weight: bolder;
}
img {
  box-shadow: 0px 0px 15px #00000079;
}
</style>
