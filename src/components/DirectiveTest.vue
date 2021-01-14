<!-- 指令比较适用于一些操作dom的情况 -->
<template>
  <div @click="alertName">directiveTest</div>
  <input ref="inputDom" v-focus placeholder="请聚焦一下" />
  <button @click="removeInput">移除input框</button>
  <div v-change-color="{colorText: 'red'}" @click="updateDiv">{{divText.value}}</div>
</template>

<script lang="ts">
import { reactive, VNode } from "vue";
// import { Vue, Component, Prop } from "vue-property-decorator";

export default {
  directives: {
    changeColor: {
      mounted: (el, binding) => {
        console.log(el, '  ', binding);
      },
      updated: function(el: any, binding) {
        console.log('元素动起来了');
        el.style.color = binding.value.colorText
      },
      unmounted: (el: HTMLElement) => {
        console.log('爷无了', el);
      }
    }
  },
  setup() {
    let divText = reactive({
      value: 0
      });
    function updateDiv(el: HTMLElement) {
      divText.value++;
    }
    return {
      divText,
      updateDiv
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
