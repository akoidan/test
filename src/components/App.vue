<template>
    <div >
        <router-link to="/num">num</router-link>
        <router-link to="/version">version</router-link>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default class Main extends Vue {

  }
</script>
