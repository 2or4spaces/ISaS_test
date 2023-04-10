<template>
  <div class="modal-window">
    <input
      type="text"
      placeholder="Поиск"
      class="search"
      v-show="showOrHiddenInput"
      @input="searchInReservArray"
    />
    <div
      class="phone-variant"
      v-for="phones in phonesReservForSearch"
      :key="phones.title"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 change-phone-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
      <img width="70" :src="phones.src" :alt="phones.title" />
      <p>{{ phones.title }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "AppPopUp",
  computed: {
    ...mapGetters(["phonesArrayInReserv"]),
    ...mapState(["phonesReservForSearch"]),
    showOrHiddenInput() {
      return this.phonesArrayInReserv.length > 3;
    },
  },
  methods: {
    searchInReservArray(event) {
      this.$store.dispatch("searchInReservArray", event.target.value);
    },
  },
};
</script>

<style scoped>
.modal-window {
  border: 1px solid grey;
  border-radius: 3%;
  width: 18vw;
  height: 14vw;
  box-shadow: 0 0 10px black;
  position: absolute;
  top: 180px;
  overflow: auto;
  z-index: 10;
  background-color: white;
}

.search {
  display: block;
  width: 15vw;
  height: 1.5vw;
  margin: 20px 12px 10px;
  border: 2px solid grey;
  font-size: 16px;
}

.phone-variant {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
}

.phone-variant > * {
  padding-right: 15px;
}

.change-phone-icon {
  stroke: green;
  max-width: 35px;
}
</style>
