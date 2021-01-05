<template>
<img alt="Vue logo" src="./assets/logo.png" />
<HelloWorld msg="Hello Vue 3.0 + Vite">
    <template #hello="{currentState, setOn, setOff, toggle }">
        <div>{{currentState}}</div>
        <div>{{setOn}}</div>
        <div @click="toggle">{{setOff}}</div>
    </template>
    <template v-slot:hello2="openState">
        <div class="hello2" v-html="Object.keys(openState)"></div>
    </template>
    <template #hello3="{ckMe}">
        <div @click="ckMe">plz clike me</div>
    </template>
</HelloWorld>
<DirectiveTest></DirectiveTest>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import DirectiveTest from './components/DirectiveTest.vue';
// @Component
export default{
    name: 'App',
    components: {
        HelloWorld,
        DirectiveTest
    },
    render() {},
    created() {
        // console.log(this.setOn)
    }
}
</script>
