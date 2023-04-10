<template>
  <div class="header-container">
    <div class="header">
      <h2>
        <a href="#" class="header-title">{{ title }}</a>
      </h2>
      <div class="header-office">
        <a href="#">{{ chapter.toUpperCase() }}</a>
        <a href="#">{{ subsection }}</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6"
          class="PrivateOfficeIcon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      title: "Каталог",
      chapter: "Сравнение",
      subsection: "Личный кабинет",
    };
  },
};
</script>

<style scoped>
.header-container {
  width: 100vw;
  border-bottom: 2px solid grey;
}
.header {
  width: 80%;
  margin: 0 auto;
  padding: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-title {
  color: blue;
}

.header-office {
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  color: black;
}
</style>
