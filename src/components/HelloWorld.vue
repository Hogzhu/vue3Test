<template>
<h1>{{ msg }}</h1>
<button @click="count++">count is: {{ count }}</button>
<p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
<div>{{state.name}}{{state.age}}</div>
<slot :slotData="slotData">slot没有加载成功就显示我啦</slot>
<slot name="hello" :currentState="currentState" :setOn="openState" :setOff="closeState" :toggle="toggle"></slot>
<slot name="hello2" :hello="openState"></slot>
<slot name="hello3" :ckMe="ckMe"></slot>
<div class="flagCenter" style="user-select:none;cursor:pointer" @click="toggleFlag">{{flag}}</div>
<div
    class="useCenter"
    @click.stop="getAddress"
>
    {{user.age}}
    <button @click.stop="addAge">show my address and add age:{{user.age}}</button>
</div>
<!-- 不知道为什么不触发touchmove，以后再看 -->
<div @touchmove.stop="touchHandler">move me</div>
</template>

<script>
import {
    defineComponent,
    reactive,
    ref,
    toRefs
} from 'vue';
import useCenter from '../compositionApi/useCenter';
// import longtap from '../directive/longPress.js';
function flagCenter() {
    // let flag = reactive({
    //     value: true
    // });
    let flag = ref(true); 
    function toggleFlag() {
        console.log('flag: ',flag); 
        flag.value = !flag.value;
    }
    return {
        flag,
        toggleFlag
    }
}
export default defineComponent({
    name: 'HelloWorld', 
    props: {
        msg: String
    },
    setup(props, context) {
        let state = reactive({
            name: '张三',
            age: 24,
        })
        const { flag, toggleFlag } = flagCenter();
        const { user, addAge, getAddress } = useCenter();
        function toggle() {
            console.log('click toggle');
            state.age++;
        }
        function ckMe() {
            console.log('click me slot3');
        }
        function touchHandler() {
            console.log(666);
        }
        return {
            state,
            toggle,
            ckMe,
            touchHandler,
            flag,
            toggleFlag,
            user,
            addAge,
            getAddress,
        }
    },
    data() {
        return {
            count: 0,
            slotData: '我是slot的数据',
            currentState: '数据1',
            openState: '数据2',
            closeState: '数据closeState',
        }
    },
})
</script>
