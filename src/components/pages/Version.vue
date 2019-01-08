<template>
    <div>Version</div>
</template>

<script lang="ts">
  import Component from "vue-class-component";
  import Vue from 'vue';
  import {Mutation, State} from "vuex-class";

  @Component
  export default class Main extends Vue {
      @State version;
      @Mutation incVersion;
      get divData() {
        return `Vuex mapped state sample: ${this.version}. Click to mutate`;
      }
  }
</script>
<style lang="sass">


</style>
