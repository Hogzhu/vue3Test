<!-- 指令比较适用于一些操作dom的情况 -->
<template>
  <div @click="alertName">directiveTest</div>
  <input ref="inputDom" v-focus placeholder="请聚焦一下" />
  <button @click="removeInput">移除input框</button>
  <div v-change-color="{colorText: 'red'}" @click="updateDiv">{{divText.value}}</div>
  <img v-img-load="imgSrc.value" />
</template>

<script lang="ts">
import { reactive, VNode } from "vue";
// import imgLoad from '../directive/imgLoad';
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
    },
    imgLoad: {
      /*
       ** 图片加载指令：未加载图片使用随机背景色占位，加载成功展示图片，加载失败展示默认图片
       ** param {string} imgSrc 待加载图片的url
       */
      mounted: (el: HTMLImageElement, binding: any) => {
        el.style.backgroundColor = `#${Math.floor(Math.random() * 1000000)}`;

        const img = new Image();
        img.src = binding.value;
        console.log(img.src);
        img.onload = function() {
          console.log('图片加载成功');
          el.style.border = '10px solid black';
          el.style.backgroundImage = `url(${binding.value}`;
        }
        img.onerror = () => {
          console.log('图片加载失败');
          el.style.backgroundImage = 'url(https://www.baidu.com/img/flexible/logo/pc/result.png)';
        }
      }
    }
  },
  setup() {
    let divText = reactive({
      value: 0
    });
    let imgSrc = reactive({
      value: 'https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=3791572139,3337857573&fm=218&app=2&f=PNG?w=121&h=75&s=A1D1A366FBE5976C4E6DF40F0300F0C2',
    });
    function updateDiv(el: HTMLElement) {
      divText.value++;
    }
    return {
      divText,
      imgSrc,
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
<style lang="less" scoped>
img {
  width: 200px;
  height: 200px;
}
</style>