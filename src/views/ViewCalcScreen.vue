<template>
    <div class="calc-screen column is-half is-offset-one-quarter">
        <div class="screen-img">
            <img src="@/assets/bear-2.png" alt="bear">
        </div>
        <div class="screen-info">
            <div class="screen-title mb-4">Укажите возраст:</div>      
            <div class="screen-text mb-3">Сколько месяцев исполнилось малышу?*</div>
            <SliderTwo 
                v-model="sliderValue" 
                units="мес"
                :min="0" 
                :max="36" 
                :class = "(sliderValue === 0)?'begin':''"
            />
            <div class="screen-text mb-3">Калькулятор для малышей старше 6 месяцев!</div>
            <Button 
                label="Далее" 
                class="p-button-raised p-button-rounded p-button-lg mb-3"
                @click="calcAge"
            />


        </div>
    </div>
    <modalMilk 
        v-if="modalMilkReact.isShowMilk"
        v-model="modalMilkReact.isShowMilk"
    />
</template>

<style scoped>

</style>

<script setup>

//  imports

import Button from 'primevue/button';
import Slider from 'primevue/slider';
import SliderTwo from '@/components/SliderTwo.vue';
import modalMilk from '@/components/modalMilk.vue';
import { ref, reactive } from 'vue';
import router from '@/router/index.js'

const sliderValue = ref(0)

const calcAge = () =>{
    if (sliderValue.value > 6){
        router.push({ path: '/ration' })       
    } else {
        modalMilkReact.isShowMilk = true
    }
}

const modalMilkReact = reactive({
    isShowMilk: false
})



</script>