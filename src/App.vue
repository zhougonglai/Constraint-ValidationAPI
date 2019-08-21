<template>
  <div id="app">
    <form class="fiel-form" ref="form">
      <div class="fiel-input" v-for="(val, key, index) in form" :key="key">
        <label :for="`${key}-${index}`" v-if="val.inline" v-text="val.label" />
        <input
          :name="key"
          v-model="val.value"
          :type="val.inputType ? val.inputType : 'text'"
          :id="`${key}-${index}`"
        />
      </div>
      <button type="submit">submit</button>
    </form>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["role", "form"])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
