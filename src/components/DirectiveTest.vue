<template>
  <div @click="alertName">directiveTest</div>
  <input ref="inputDom" v-focus placeholder="请聚焦一下" />
  <button @click="removeInput">移除input框</button>
</template>

<script lang="ts">
import { createApp } from "vue";
// import { Vue, Component, Prop } from "vue-property-decorator";

export default {
  directives: {
    touchM: {
      updated: function(el: any) {
        console.log('元素动起来了');
      }
    }
  },
  methods: {
    alertName() {
      console.log('directive');
    },
    removeInput() {
      (this.$refs.inputDom as HTMLInputElement).remove();
    },
  }
}
</script>
