<template>
    <div>NUM</div>
</template>
<script lang="ts">
  import {State, Action, Mutation} from "vuex-class";
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component
  export default class Num extends Vue {
      created() {
          import('../../a.ts');
      }
  }
</script>

<style lang="sass" scoped>
</style>