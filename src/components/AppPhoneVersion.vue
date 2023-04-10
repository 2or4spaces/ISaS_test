<template>
  <div class="phone">
    <div class="phone-image">
      <img width="100" :src="phoneImage" :alt="phoneTitle" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 arrowIcon"
        :class="animationArrowIcon"
        v-if="showOrHiddenArrowIcon"
        @click.prevent="choosePhone"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>

      <p>{{ phoneTitle }}</p>
    </div>
  </div>
  <transition name="popUpFade">
    <app-pop-up v-show="popUpVisibility"></app-pop-up>
  </transition>
</template>

<script>
import AppPopUp from "./AppPopUp.vue";
import { mapGetters } from "vuex";

export default {
  name: "AppPhoneVersion",
  components: { AppPopUp },
  props: {
    phoneTitle: {
      type: String,
      required: true,
    },
    phoneImage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      popUpVisibility: false,
      turnArrowIcon: false,
    };
  },
  computed: {
    ...mapGetters(["phonesArrayInReserv"]),
    showOrHiddenArrowIcon() {
      return Boolean(this.phonesArrayInReserv.length);
    },
    animationArrowIcon() {
      return {
        turnArrowIcon: this.turnArrowIcon,
      };
    },
  },
  methods: {
    choosePhone() {
      this.popUpVisibility = !this.popUpVisibility;
      this.turnArrowIcon = !this.turnArrowIcon;
    },
  },
};
</script>

<style scoped>
.turnArrowIcon {
  animation: turnArrowIcon 0.5s;
  transform: rotate(180deg);
}

@keyframes turnArrowIcon {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}

.popUpFade-enter-active {
  animation: popUpFadeIn 0.5s;
}

.popUpFade-leave-active {
  animation: popUpFadeOut 0.5s;
}

@keyframes popUpFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes popUpFadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.phone {
  margin: 0;
}

.phone-image {
  text-align: center;
}

img {
  margin-left: 35px;
}

.arrowIcon {
  stroke: blue;
  margin-left: 5px;
  margin-bottom: 5px;
}
</style>
