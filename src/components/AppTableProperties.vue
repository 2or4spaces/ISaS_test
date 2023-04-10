<template>
  <table>
    <caption>
      Смартфоны
    </caption>
    <tbody>
      <tr class="phone-amount white-row">
        <td
          v-for="phones in phonesArrayWithSelectedCount"
          :key="phones.title"
        ></td>
        <td>
          <ul>
            <li><a href="#">Отобразить товары:</a></li>
            <li>
              <input
                id="count2"
                type="radio"
                value="2"
                name="phoneCount"
                @click="changePhonesCount"
              />
              <label for="count2">2</label>
            </li>
            <li>
              <input
                id="count3"
                type="radio"
                value="3"
                name="phoneCount"
                @click="changePhonesCount"
              />
              <label for="count3">3</label>
            </li>
            <li>
              <input
                id="count4"
                type="radio"
                value="4"
                name="phoneCount"
                @click="changePhonesCount"
              />
              <label for="count4">4</label>
            </li>
            <li>
              <input
                id="count5"
                type="radio"
                value="5"
                name="phoneCount"
                @click="changePhonesCount"
              />
              <label for="count5">5</label>
            </li>
            <li>
              <input
                id="count6"
                type="radio"
                value="6"
                name="phoneCount"
                @click="changePhonesCount"
              />
              <label for="count6">6</label>
            </li>
          </ul>
        </td>
      </tr>
      <tr class="white-row">
        <td>
          <div class="input-difference">
            <input type="checkbox" id="difference" />
            <label for="difference">Показать различия</label>
          </div>
        </td>
        <td v-for="phones in phonesArrayWithSelectedCount" :key="phones.title">
          <app-phone-version
            :phone-title="phones.title"
            :phone-image="phones.src"
          ></app-phone-version>
        </td>
      </tr>
      <tr>
        <td>{{ phoneSpecifications[0].toUpperCase() }}</td>
        <td v-for="phones in phonesArrayWithSelectedCount" :key="phones.title">
          {{ phones.manufacturer }}
        </td>
      </tr>
      <tr>
        <td>{{ phoneSpecifications[1].toUpperCase() }}</td>
        <td v-for="phones in phonesArrayWithSelectedCount" :key="phones.title">
          {{ phones.year }}
        </td>
      </tr>
      <tr>
        <td>{{ phoneSpecifications[2].toUpperCase() }}</td>
        <td v-for="phones in phonesArrayWithSelectedCount" :key="phones.title">
          {{ phones.diagonal }}
        </td>
      </tr>
      <tr>
        <td>{{ phoneSpecifications[3].toUpperCase() }}</td>
        <td v-for="phones in phonesArrayWithSelectedCount" :key="phones.title">
          {{ phones.country }}
        </td>
      </tr>
      <tr>
        <td>{{ phoneSpecifications[4].toUpperCase() }}</td>
        <td v-for="phones in phonesArrayWithSelectedCount" :key="phones.title">
          {{ phones.memory + " Гб" }}
        </td>
      </tr>
      <tr>
        <td>{{ phoneSpecifications[5].toUpperCase() }}</td>
        <td v-for="phones in phonesArrayWithSelectedCount" :key="phones.title">
          {{ phones.frequency + " Гц" }}
        </td>
      </tr>
      <tr>
        <td>{{ phoneSpecifications[6].toUpperCase() }}</td>
        <td v-for="phones in phonesArrayWithSelectedCount" :key="phones.title">
          <component :is="availableOrAbsentIcon(phones.NFC)"></component>
        </td>
      </tr>
      <tr>
        <td>{{ phoneSpecifications[7].toUpperCase() }}</td>
        <td v-for="phones in phonesArrayWithSelectedCount" :key="phones.title">
          <component :is="availableOrAbsentIcon(phones.ESIM)"></component>
        </td>
      </tr>
      <tr>
        <td>{{ phoneSpecifications[8].toUpperCase() }}</td>
        <td v-for="phones in phonesArrayWithSelectedCount" :key="phones.title">
          <component
            :is="availableOrAbsentIcon(phones.wirelessCharger)"
          ></component>
        </td>
      </tr>
      <tr>
        <td>{{ phoneSpecifications[9].toUpperCase() }}</td>
        <td v-for="phones in phonesArrayWithSelectedCount" :key="phones.title">
          {{ showPriceInRubles(phones.price) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import AppPhoneVersion from "./AppPhoneVersion.vue";
import AppAvailableIcon from "./AppAvailableIcon.vue";
import AppAbsentIcon from "./AppAbsentIcon.vue";
import { mapGetters } from "vuex";

export default {
  name: "AppTableProperties",
  components: {
    AppPhoneVersion,
    AppAvailableIcon,
    AppAbsentIcon,
  },
  data() {
    return {
      phoneSpecifications: [
        "Производитель",
        "Год релиза",
        "Диагональ экрана (дюйм)",
        "Страна-производитель",
        "Объем памяти",
        "Частота обновления экрана",
        "nfc",
        "Поддержка esim",
        "Поддержка беспроводной зарядки",
        "Стоимость",
      ],
    };
  },
  computed: {
    ...mapGetters(["phonesArrayWithSelectedCount"]),
  },
  methods: {
    changePhonesCount(event) {
      this.$store.dispatch("changePhonesCount", event.target.value);
    },
    showPriceInRubles(price) {
      return new Intl.NumberFormat("ru", {
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 0,
      }).format(price);
    },
    availableOrAbsentIcon(value) {
      if (value) return "app-available-icon";
      return "app-absent-icon";
    },
  },
  mounted() {
    this.$store.dispatch("createPhonesReservForSearch");
  },
};
</script>

<style scoped>
table {
  margin: 0 auto 100px;
  border-collapse: collapse;
}

caption {
  color: gray;
  font-size: 3em;
  font-weight: bold;
  text-align: left;
  padding-top: 50px;
}

td {
  padding: 40px 0;
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
  background-color: #f4f9fc;
  width: 200px;
}

ul {
  display: flex;
  white-space: nowrap;
  padding: 0;
}

ul li {
  padding-left: 5px;
}

ul li input {
  display: none;
}

ul li label:hover {
  text-decoration: underline;
}
.phone-amount td {
  padding: 0;
}

.white-row td {
  background-color: white;
  border: none;
}

label,
a {
  color: blue;
}

input {
  margin-right: 10px;
}

.input-difference {
  margin-top: 100px;
}
</style>
