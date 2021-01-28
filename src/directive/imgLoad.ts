import Vue from 'vue';
const imgLoad = (Vue as any).directive('imgLoad', {
    mounted: (el: HTMLImageElement, binding: any) => {
        el.style.backgroundColor = `#Math.floor(Math.random() * 1000000)`;

        const img = new Image();
        img.style.backgroundImage = `url(${binding.value}`;
        if (img.onerror) {
            img.src = 'https://www.baidu.com/img/flexible/logo/pc/result.png';
        }
    }
});

export default { imgLoad };