<template>
        <div class="modal is-active">
    <div class="modal-background"></div>
    <div
      class="modal-card"
      ref="modalCardRef"
    >
        <header class="modal-card-head is-justify-content-flex-end">
        <button 
            class="delete" 
            aria-label="close"
            @click="closeModal"
        >
        
        </button>
        </header>
        <section class="modal-card-body">
            <div class="modal-img">
                <img src="@/assets/mailto.png" alt="1111">
            </div>
            <div class="modal-text">
                <div class="mb-2"> <strong>  Идеальной пищей для грудного ребенка является молоко матери. </strong> </div>   

                Всемирная организация здравоохранения рекомендует исключительно грудное вскармливание в первые шесть 
                месяцев и последующее введение прикорма при продолжении 
                грудного вскармливания. Продолжайте грудное вскармливание как можно дольше после введения прикорма. 
                Компания Нестле поддерживает данную рекомендацию. Для принятия решения о сроках и способе введения 
                прикорма в рацион ребенка необходима консультация специалиста.
            </div>
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
        <Button 
            label="Далее" 
            class="p-button-raised p-button-rounded p-button-lg mb-3"
            @click="closeModal"
        />

        </footer>
    </div>
    </div>
</template>

<script setup>

// imports 

import Button from 'primevue/button';

// props

const props = defineProps({
    modalValue: {
        type: Boolean,
        default: false
    }
})

// emits

const emit = defineEmits(['update:modelValue'])

const closeModal = () =>{
    emit('update:modelValue', false)
    
}


</script>