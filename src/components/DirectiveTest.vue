<template>
  <div @click="alertName">1234</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
export default class DirectiveTest extends Vue {
  private alertName() {
    alert(123);
  }
}
</script>
