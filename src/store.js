import { createStore } from "vuex";

export default createStore({
  state: {
    showPhonesCount: 3,
    phones: [
      {
        title: "Apple iPhone 14",
        src: "/phones/Apple iPhone 14 128 ГБ.webp",
        manufacturer: "Apple",
        year: 2022,
        diagonal: 6.1,
        country: "США",
        memory: 128,
        frequency: 60,
        NFC: true,
        ESIM: false,
        wirelessCharger: true,
        price: 76399,
      },
      {
        title: "Apple iPhone SE",
        src: "/phones/Apple iPhone SE 64 ГБ.webp",
        manufacturer: "Apple",
        year: 2021,
        diagonal: 4.7,
        country: "США",
        memory: 64,
        frequency: 60,
        NFC: false,
        ESIM: true,
        wirelessCharger: true,
        price: 36999,
      },
      {
        title: "Honor X6",
        src: "/phones/Honor X6 64 ГБ.webp",
        manufacturer: "Honor",
        year: 2022,
        diagonal: 6.5,
        country: "Китай",
        memory: 64,
        frequency: 60,
        NFC: true,
        ESIM: false,
        wirelessCharger: false,
        price: 9999,
      },
      {
        title: "Honor X7",
        src: "/phones/Honor X7 128 ГБ.webp",
        manufacturer: "Honor",
        year: 2021,
        diagonal: 6.74,
        country: "Китай",
        memory: 128,
        frequency: 90,
        NFC: false,
        ESIM: false,
        wirelessCharger: false,
        price: 14999,
      },
      {
        title: "Huawei nova Y61",
        src: "/phones/Huawei nova Y61 64 ГБ.webp",
        manufacturer: "Huawei",
        year: 2022,
        diagonal: 6.52,
        country: "Китай",
        memory: 64,
        frequency: 60,
        NFC: true,
        ESIM: false,
        wirelessCharger: false,
        price: 8399,
      },
      {
        title: "Huawei nova Y90",
        src: "/phones/Huawei nova Y90 128 ГБ.webp",
        manufacturer: "Huawei",
        year: 2021,
        diagonal: 6.7,
        country: "Китай",
        memory: 128,
        frequency: 90,
        NFC: true,
        ESIM: false,
        wirelessCharger: false,
        price: 16999,
      },
      {
        title: "Samsung Galaxy A04S",
        src: "/phones/Samsung Galaxy A04S 64 ГБ.webp",
        manufacturer: "Samsung",
        year: 2022,
        diagonal: 6.5,
        country: "Южная Корея",
        memory: 64,
        frequency: 90,
        NFC: false,
        ESIM: false,
        wirelessCharger: false,
        price: 12499,
      },
      {
        title: "Samsung Galaxy A13",
        src: "/phones/Samsung Galaxy A13 32 ГБ.webp",
        manufacturer: "Samsung",
        year: 2021,
        diagonal: 6.6,
        country: "Южная Корея",
        memory: 32,
        frequency: 60,
        NFC: true,
        ESIM: false,
        wirelessCharger: false,
        price: 9999,
      },
      {
        title: "Xiaomi Redmi 10A",
        src: "/phones/Xiaomi Redmi 10A 32 ГБ.webp",
        manufacturer: "Xiaomi",
        year: 2022,
        diagonal: 6.53,
        country: "Китай",
        memory: 32,
        frequency: 60,
        NFC: true,
        ESIM: false,
        wirelessCharger: false,
        price: 5999,
      },
      {
        title: "Xiaomi Redmi 10C",
        src: "/phones/Xiaomi Redmi 10C 128 ГБ.webp",
        manufacturer: "Xiaomi",
        year: 2021,
        diagonal: 6.71,
        country: "Китай",
        memory: 128,
        frequency: 60,
        NFC: true,
        ESIM: false,
        wirelessCharger: false,
        price: 12999,
      },
    ],
    phonesReservForSearch: [],
  },
  getters: {
    phonesArrayWithSelectedCount(state) {
      return state.phones.slice(0, state.showPhonesCount);
    },
    phonesArrayInReserv(state) {
      return state.phones.slice(state.showPhonesCount);
    },
  },
  mutations: {
    changePhonesCount(state, count) {
      state.showPhonesCount = parseInt(count);
      state.phonesReservForSearch = state.phones.slice(state.showPhonesCount);
    },
    createPhonesReservForSearch(state) {
      return (state.phonesReservForSearch = state.phones.slice(
        state.showPhonesCount
      ));
    },
    searchInReservArray(state, inputValue) {
      let currentPhonesReserv = state.phones.slice(state.showPhonesCount);
      return (state.phonesReservForSearch = currentPhonesReserv.filter(
        (phone) => new RegExp(inputValue, "i").test(phone.title)
      ));
    },
  },
  actions: {
    changePhonesCount(store, count) {
      store.commit("changePhonesCount", count);
    },
    createPhonesReservForSearch(store) {
      store.commit("createPhonesReservForSearch");
    },
    searchInReservArray(store, inputValue) {
      store.commit("searchInReservArray", inputValue);
    },
  },

  strict: process.env.NODE_ENV !== "production",
});
