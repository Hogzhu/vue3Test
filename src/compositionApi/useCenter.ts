// 能够全局引用的方法，composition-api
import { ref, reactive } from 'vue';

export default function useCenter(){
    let user = reactive({
        age: 22,
        sex: '男',
        address: '飞鸟客'
    });
    function addAge() {
        user.age++;
    }
    function getAddress() {
        console.log('get user address' + user.address);
        return user.address;
    }
    
    return {
        user,
        addAge,
        getAddress,
    }
}