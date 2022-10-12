<template>
    <div class="start-screen column is-half is-offset-one-quarter">
        <div class="screen-img">
            <div class="media-img__inner "> 
                <div class="iron-calc-scale">
                    <span class="iron-calc-scale__item">75%</span>
                    <span class="iron-calc-scale__item">50%</span>
                    <span class="iron-calc-scale__item">25%</span>
                </div>
            </div>  
            <img src="@/assets/bear-1.png" alt="bear">
        </div>
        <div class="screen-info">
            <div class="screen-title mb-3">Мама и папа! А вы знали, что:</div>      
            <div class="screen-text mb-3">Вашему ребенку во втором полугодии жизни требуется в 5,5 раз больше железа на килограмм веса*, чем вам.
                                    Железо играет огромную роль для умственного развития вашего малыша.
                                    Если вашему ребенку 6-7 месяцев, то он должен получать 7 мг железа**, а если больше 7 месяцев — больше 10 мг железа** с пищей каждый день.
            </div>
            <RouterLink 
                class="link"
                to="/age-calc"
            >   
                <Button 
                    label="Начать тест" 
                    class="p-button-raised p-button-rounded p-button-lg" 
                    @click="toCalcScreen"
                />
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>

</style>

<script setup>

//  imports

import Button from 'primevue/button';

 
</script>